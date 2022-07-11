package alphabet

type AlphabetFormatter struct {
	ID                 int    `json:"id"`
	AlphabetsKorea     string `json:"alphabets_korea"`
	Consonants         string `json:"consonants"`
	AlphabetsIndonesia string `json:"alphabets_indonesia"`
}

func FortmatAlphabet(alphabet Alphabets) AlphabetFormatter {
	formatter := AlphabetFormatter{
		ID:                 alphabet.ID,
		AlphabetsKorea:     alphabet.AlphabetsKorea,
		Consonants:         alphabet.Consonants,
		AlphabetsIndonesia: alphabet.AlphabetsIndonesia,
	}
	return formatter
}

func FortmatAlphabetter(alphabets []Alphabets) []AlphabetFormatter {
	alphabetsFormatter := []AlphabetFormatter{}

	for _, alphabets := range alphabets {
		AlphabetFormatter := FortmatAlphabet(alphabets)
		alphabetsFormatter = append(alphabetsFormatter, AlphabetFormatter)
	}

	return alphabetsFormatter
}
