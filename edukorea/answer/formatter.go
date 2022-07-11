package answer

type AnswerFormatter struct {
	ID     int    `json:"id"`
	UserID int    `json:"user_id"`
	NoQuiz int    `json:"no_quiz"`
	Answer string `json:"answer"`
}

func FortmatAnswer(answer Answer) AnswerFormatter {
	formatter := AnswerFormatter{
		ID:     answer.ID,
		UserID: answer.UserID,
		NoQuiz: answer.NoQuiz,
		Answer: answer.Answer,
	}
	return formatter
}

func FortmatAnswertter(answer []Answer) []AnswerFormatter {
	answerFormatter := []AnswerFormatter{}

	for _, answer := range answer {
		AnswerFormatter := FortmatAnswer(answer)
		answerFormatter = append(answerFormatter, AnswerFormatter)
	}

	return answerFormatter
}
