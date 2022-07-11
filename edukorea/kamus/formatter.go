package kamus

type KamusFormatter struct {
	ID            int    `json:"id"`
	WordKorea     string `json:"word_korea"`
	Consonants    string `json:"consonants"`
	WordIndonesia string `json:"word_indonesia"`
}

func FortmatAlphabet(kamus Kamus) KamusFormatter {
	formatter := KamusFormatter{
		ID:            kamus.ID,
		WordKorea:     kamus.WordKorea,
		Consonants:    kamus.Consonants,
		WordIndonesia: kamus.WordIndonesia,
	}
	return formatter
}

func FortmatKamustter(kamus []Kamus) []KamusFormatter {
	kamusFormatter := []KamusFormatter{}

	for _, kamus := range kamus {
		KamusFormatter := FortmatAlphabet(kamus)
		kamusFormatter = append(kamusFormatter, KamusFormatter)
	}

	return kamusFormatter
}
