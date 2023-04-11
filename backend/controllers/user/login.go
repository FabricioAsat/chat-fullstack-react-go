package user

import (
	"context"
	"strings"
	"time"

	"github.com/FabricioAsat/chat-app-go-react/collection"
	"github.com/FabricioAsat/chat-app-go-react/database"
	"github.com/FabricioAsat/chat-app-go-react/models"
	"github.com/gofiber/fiber/v2"
	"go.mongodb.org/mongo-driver/bson"
	"golang.org/x/crypto/bcrypt"
)

func Login(c *fiber.Ctx) error {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	DB := database.ConnectDB()
	userCollection := collection.GetCollection(DB, "Users")

	defer cancel()

	user := new(models.UserModel)
	var dbSameUser models.UserModel

	if err := c.BodyParser(&user); err != nil || user.Email == "" || user.Password == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"message": err})
	}

	err := userCollection.FindOne(ctx, bson.M{"email": strings.ToLower(user.Email)}).Decode(&dbSameUser)

	if err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{"message": "Usuario no encontrado"})
	}

	err = bcrypt.CompareHashAndPassword([]byte(dbSameUser.Password), []byte(user.Password))

	if user.Email != dbSameUser.Email || err != nil {
		return c.Status(fiber.StatusNotAcceptable).JSON(fiber.Map{"message": "Invalid email or password"})
	}

	dbSameUser.Password = "SuperSecret"
	return c.Status(fiber.StatusAccepted).JSON(fiber.Map{"message": "Login successful", "data": dbSameUser})
}
