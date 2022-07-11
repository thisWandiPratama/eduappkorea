package alphabet

type InputAlphabet struct {
	AlphabetsKorea     string `json:"alphabets_korea" binding:"required"`
	Consonants         string `json:"consonants" binding:"required"`
	AlphabetsIndonesia string `json:"alphabets_indonesia" binding:"required"`
}

type UpdateAlphabet struct {
	ID                 int    `json:"id" binding:"required"`
	AlphabetsKorea     string `json:"alphabets_korea" binding:"required"`
	Consonants         string `json:"consonants" binding:"required"`
	AlphabetsIndonesia string `json:"alphabets_indonesia" binding:"required"`
}

type DeleteAlphabet struct {
	ID int `json:"id" binding:"required"`
}
