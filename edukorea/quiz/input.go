package quiz

type InputQuiz struct {
	Quiz    string `json:"quiz" binding:"required"`
	A       string `json:"a" binding:"required"`
	B       string `json:"b" binding:"required"`
	C       string `json:"c" binding:"required"`
	D       string `json:"d" binding:"required"`
	Currect string `json:"currect" binding:"required"`
}

type UpdateQuiz struct {
	ID      int    `json:"id" binding:"required"`
	Quiz    string `json:"quiz" binding:"required"`
	A       string `json:"a" binding:"required"`
	B       string `json:"b" binding:"required"`
	C       string `json:"c" binding:"required"`
	D       string `json:"d" binding:"required"`
	Currect string `json:"currect" binding:"required"`
}

type DeleteQuiz struct {
	ID int `json:"id" binding:"required"`
}
