package messages

import (
	"context"
	"time"

	"github.com/FabricioAsat/chat-app-go-react/collection"
	"github.com/FabricioAsat/chat-app-go-react/database"
	"github.com/FabricioAsat/chat-app-go-react/models"
	"github.com/gofiber/fiber/v2"
)

func AddMessage(c *fiber.Ctx) error {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	DB := database.ConnectDB()
	messageCollection := collection.GetCollection(DB, "messages")
	defer cancel()

	message := new(models.MessageModel)

	if err := c.BodyParser(&message); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(err)
	}
	message.CreatedAt = time.Now()

	res, err := messageCollection.InsertOne(ctx, message)
	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(err)
	}

	return c.Status(fiber.StatusCreated).JSON(res)
}
