package user

import (
	"context"
	"time"

	"github.com/FabricioAsat/chat-app-go-react/collection"
	"github.com/FabricioAsat/chat-app-go-react/database"
	"github.com/gofiber/fiber/v2"
	"go.mongodb.org/mongo-driver/bson"
)

func GetAllUsers(c *fiber.Ctx) error {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	DB := database.ConnectDB()
	userCollection := collection.GetCollection(DB, "Users")

	defer cancel()

	// Obtengo del body (es un POST) un email y traigo todos los users menos el del email dado
	body := bson.M{}
	c.BodyParser(&body)

	filterUserById := bson.M{"email": bson.M{"$ne": body["email"]}}

	// Obtengo el cursor
	cursor, err := userCollection.Find(ctx, filterUserById)

	if err != nil {
		return c.Status(fiber.StatusNotFound).JSON(err)
	}

	// Variable donde se almacenan todos los users
	var allUsers []bson.M

	if err := cursor.All(ctx, &allUsers); err != nil {
		return c.Status(fiber.StatusConflict).JSON(err)
	}

	for index := range allUsers {
		delete(allUsers[index], "password")

	}

	return c.Status(fiber.StatusAccepted).JSON(allUsers)
}
