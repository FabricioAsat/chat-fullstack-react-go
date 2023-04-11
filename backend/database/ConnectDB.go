package database

import (
	"context"
	"log"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func ConnectDB() *mongo.Client {
	// Descomentar cuando quieras conectarte a MongoDB Atlas (Cloud)
	// DDBB_URL := os.Getenv("MONGO_URL")
	// PASSWORD := os.Getenv("PASSWORD")
	// DDBB_URL = strings.Replace(DDBB_URL, "<password>", PASSWORD, 1)

	// Descomentar cuando quieras conectarte a MongoDB en localhost
	DDBB_URL := "mongodb://localhost:27017"

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	client, err := mongo.NewClient(options.Client().ApplyURI(DDBB_URL))

	if err != nil {
		log.Fatal(err)
	}

	err = client.Connect(ctx)
	defer cancel()

	if err != nil {
		log.Fatal(err)
	}
	return client
}
