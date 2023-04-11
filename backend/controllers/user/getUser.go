package user

import (
	"context"
	"time"

	"github.com/FabricioAsat/chat-app-go-react/collection"
	"github.com/FabricioAsat/chat-app-go-react/database"
	"github.com/FabricioAsat/chat-app-go-react/models"
	"github.com/gofiber/fiber/v2"
)

func GetUser(c *fiber.Ctx) error {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	DB := database.ConnectDB()
	userCollection := collection.GetCollection(DB, "Users")
	defer cancel()

	user := new(models.UserModel)
	id := c.Params("id")

	// En progresooo

	return nil
}
