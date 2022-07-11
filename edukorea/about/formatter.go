package about

type AboutFormatter struct {
	ID         int    `json:"id"`
	AboutsText string `json:"abouts_text"`
}

func FortmatAbout(about About) AboutFormatter {
	formatter := AboutFormatter{
		ID:         about.ID,
		AboutsText: about.AboutsText,
	}
	return formatter
}
