package services

import (
	"log"

	"github.com/joho/godotenv"
)

func DotEnvInit() {
	err := godotenv.Load()

	if err != nil {
		log.Fatal("Error en .env")
	}
}
