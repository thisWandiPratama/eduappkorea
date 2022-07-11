package about

type UpdateInput struct {
	ID         int    `json:"id" binding:"required"`
	AboutsText string `json:"abouts_text" binding:"required"`
}
