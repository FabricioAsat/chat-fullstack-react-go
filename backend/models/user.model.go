package models

import "time"

type UserModel struct {
	Username  string `bson:"username"`
	Email     string `bson:"email" validate:"required,email"`
	Password  string `bson:"password"`
	CreatedAt time.Time
}
