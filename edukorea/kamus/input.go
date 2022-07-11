package kamus

type InputKamus struct {
	WordKorea     string `json:"word_korea" binding:"required"`
	Consonants    string `json:"consonants" binding:"required"`
	WordIndonesia string `json:"word_indonesia" binding:"required"`
}

type UpdateKamus struct {
	ID            int    `json:"id" binding:"required"`
	WordKorea     string `json:"word_korea" binding:"required"`
	Consonants    string `json:"consonants" binding:"required"`
	WordIndonesia string `json:"word_indonesia" binding:"required"`
}

type DeleteKamus struct {
	ID int `json:"id" binding:"required"`
}

type Search struct {
	search string `json:"id" binding:"required"`
}
