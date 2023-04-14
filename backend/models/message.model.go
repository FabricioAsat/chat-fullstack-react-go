package models

import "time"

type MessageModel struct {
	IdListener string `bson:"idlistener" validate:"required"`
	IdSender   string `bson:"idsender" validate:"required"`

	Message   string    `bson:"message" validate:"required"`
	CreatedAt time.Time `bson:"createdat"`
}
