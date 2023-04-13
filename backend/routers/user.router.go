package routers

import (
	"github.com/FabricioAsat/chat-app-go-react/controllers/user"
	"github.com/gofiber/fiber/v2"
)

func UserRouter(app *fiber.App) {

	// Get Methods
	app.Get("/users/:id", user.GetUser)

	app.Post("/users", user.GetAllUsers)
	// Post Methods
	app.Post("/register", user.Register)
	app.Post("/login", user.Login)

	// Put Methods

	// Delete Methods

}
