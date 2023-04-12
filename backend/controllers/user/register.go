package user

import (
	"context"
	"strings"
	"time"

	"golang.org/x/crypto/bcrypt"

	"github.com/FabricioAsat/chat-app-go-react/collection"
	"github.com/FabricioAsat/chat-app-go-react/database"
	"github.com/FabricioAsat/chat-app-go-react/models"
	"github.com/FabricioAsat/chat-app-go-react/services"
	"github.com/gofiber/fiber/v2"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func Register(c *fiber.Ctx) error {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	DB := database.ConnectDB()
	userCollection := collection.GetCollection(DB, "Users")
	defer cancel()

	newUser := new(models.UserModel)

	if err := c.BodyParser(&newUser); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"message": err})
	}

	// Crea la condición de que el email sea único
	emailIndex := mongo.IndexModel{
		Keys:    bson.M{"email": 1},
		Options: options.Index().SetUnique(true),
	}
	// Verifica y retorna un error si es que existe otro email en la db
	if _, err := userCollection.Indexes().CreateOne(ctx, emailIndex); err != nil || !services.EmailValidator(newUser.Email) {
		return c.Status(fiber.StatusConflict).JSON(fiber.Map{"message": err})
	}

	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(newUser.Password), bcrypt.DefaultCost)
	if err != nil {
		return c.Status(fiber.StatusConflict).JSON(fiber.Map{"message": err})
	}

	userPayload := models.UserModel{
		Email:     strings.ToLower(newUser.Email),
		Username:  newUser.Username,
		Password:  string(hashedPassword),
		CreatedAt: time.Now(),
	}

	// Inserto el usuario en la db
	insertResult, err := userCollection.InsertOne(ctx, userPayload)

	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"message": err})
	}

	return c.Status(fiber.StatusAccepted).JSON(fiber.Map{"_id": insertResult.InsertedID, "username": userPayload.Username, "email": userPayload.Email})
}
