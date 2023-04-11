package main

import (
	"os"

	"github.com/FabricioAsat/chat-app-go-react/routers"
	"github.com/FabricioAsat/chat-app-go-react/services"
	"github.com/gofiber/fiber/v2"
)

func main() {
	services.DotEnvInit()
	PORT := os.Getenv("PORT")
	app := fiber.New()

	// Routes
	routers.UserRouter(app)
	routers.MessageRouter(app)

	app.Listen(PORT)
}
