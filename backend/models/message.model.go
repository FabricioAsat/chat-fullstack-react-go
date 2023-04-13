package models

type MessageModel struct {
	IdListener string `bson:"idlistener"`
	IdSender   string `bson:"idsender"`

	Message string `bson:"message" validate:"required"`
}
