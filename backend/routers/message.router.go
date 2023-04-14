package routers

import (
	"github.com/FabricioAsat/chat-app-go-react/controllers/messages"
	"github.com/gofiber/fiber/v2"
)

func MessageRouter(app *fiber.App) {

	// Get Methods
	// Post Methods
	app.Post("addmessage", messages.AddMessage)
	app.Post("getmessages", messages.GetAllMessages)

	// Put Methods
	// Delete Methods

}
