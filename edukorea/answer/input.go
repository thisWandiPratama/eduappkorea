package answer

type InputAnswer struct {
	UserID int    `json:"user_id" binding:"required"`
	NoQuiz int    `json:"no_quiz" binding:"required"`
	Answer string `json:"answer" binding:"required"`
}

type ByIdAnswer struct {
	ID int `json:"id" binding:"required"`
}
