package routers

import (
	"github.com/FabricioAsat/chat-app-go-react/controllers/user"
	"github.com/gofiber/fiber/v2"
)

func UserRouter(app *fiber.App) {

	// Get Methods
	app.Get("/users", user.GetAllUsers)
	app.Get("/users/:id", user.GetUser)

	// Post Methods
	app.Post("/register", user.Register)
	app.Post("/login", user.Login)

	// Put Methods

	// Delete Methods

}
