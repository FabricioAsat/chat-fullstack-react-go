package user

import (
	"context"
	"time"

	"github.com/FabricioAsat/chat-app-go-react/collection"
	"github.com/FabricioAsat/chat-app-go-react/database"
	"github.com/gofiber/fiber/v2"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

func GetUser(c *fiber.Ctx) error {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	DB := database.ConnectDB()
	userCollection := collection.GetCollection(DB, "Users")
	defer cancel()

	user := bson.M{}

	// Obtengo el id de los paramas, y transformo a un objID
	id := c.Params("id")
	objID, _ := primitive.ObjectIDFromHex(id)

	err := userCollection.FindOne(ctx, bson.M{"_id": objID}).Decode(&user)

	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"message": err})
	}

	delete(user, "password")

	return c.Status(fiber.StatusAccepted).JSON(fiber.Map{"data": user})
}
