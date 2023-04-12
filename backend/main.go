package main

import (
	"os"

	"github.com/FabricioAsat/chat-app-go-react/routers"
	"github.com/FabricioAsat/chat-app-go-react/services"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
	services.DotEnvInit()
	PORT := os.Getenv("PORT")
	app := fiber.New()

	// Cors
	app.Use(cors.New(cors.Config{
		AllowOrigins: "*",
		AllowHeaders: "Origin, Content-Type, Accept",
		AllowMethods: "GET, POST, PUT, DELETE",
	}))

	// Routes
	routers.UserRouter(app)
	routers.MessageRouter(app)

	app.Listen(PORT)
}
