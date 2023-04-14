package messages

import (
	"context"
	"sort"
	"time"

	"github.com/FabricioAsat/chat-app-go-react/collection"
	"github.com/FabricioAsat/chat-app-go-react/database"
	"github.com/gofiber/fiber/v2"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

func GetAllMessages(c *fiber.Ctx) error {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	DB := database.ConnectDB()
	messageCollection := collection.GetCollection(DB, "messages")
	defer cancel()

	messageID := bson.M{}
	c.BodyParser(&messageID)
	filter1 := bson.M{"idlistener": messageID["idlistener"], "idsender": messageID["idsender"]}
	filter2 := bson.M{"idlistener": messageID["idsender"], "idsender": messageID["idlistener"]}

	cursor1, err1 := messageCollection.Find(ctx, filter1)
	cursor2, err2 := messageCollection.Find(ctx, filter2)

	if err1 != nil || err2 != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"Error 1": err1, "Error 2": err2})
	}

	var allMessagesSended []bson.M
	var allMessagesListened []bson.M

	// Se supone que todos los mensajes son distintos. Y es 0 escalable, a la larga no es para nada óptimo.
	if err := cursor1.All(ctx, &allMessagesSended); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(err)
	}
	if err := cursor2.All(ctx, &allMessagesListened); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(err)
	}

	// Ahora los tengo que guardar en una variable ordenados por fecha.
	var allMessages []bson.M
	allMessages = append(allMessages, allMessagesListened...)
	allMessages = append(allMessages, allMessagesSended...)

	// Función de comparación para ordenar por fechas
	compareFn := func(i, j int) bool {
		date1 := allMessages[i]["createdat"].(primitive.DateTime)
		date2 := allMessages[j]["createdat"].(primitive.DateTime)
		return date1 < date2
	}
	// Ordenar el slice utilizando sort.Interface y la función de comparación
	sort.Slice(allMessages, compareFn)

	return c.Status(fiber.StatusCreated).JSON(allMessages)
}
