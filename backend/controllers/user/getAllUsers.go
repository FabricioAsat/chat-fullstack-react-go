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

	// Obtengo el cursor
	cursor, err := userCollection.Find(ctx, bson.M{})

	if err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{"message": "Error en la busqueda de usuarios"})
	}

	// Variable donde se almacenan todos los users
	var allUsers []bson.M

	if err := cursor.All(ctx, &allUsers); err != nil {
		return c.Status(fiber.StatusConflict).JSON(fiber.Map{"message": "Error en la copia de datos"})
	}

	for index := range allUsers {
		delete(allUsers[index], "password")
	}

	return c.Status(fiber.StatusAccepted).JSON(fiber.Map{"data": allUsers})
}
