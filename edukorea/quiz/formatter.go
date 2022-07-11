package quiz

type QuizFormatter struct {
	ID      int    `json:"id"`
	Quiz    string `json:"quiz"`
	A       string `json:"a"`
	B       string `json:"b"`
	C       string `json:"c"`
	D       string `json:"d"`
	Currect string `json:"currect"`
}

func FortmatQuiz(quiz Quiz) QuizFormatter {
	formatter := QuizFormatter{
		ID:      quiz.ID,
		Quiz:    quiz.Quiz,
		A:       quiz.A,
		B:       quiz.B,
		C:       quiz.C,
		D:       quiz.D,
		Currect: quiz.Correct,
	}
	return formatter
}

func FortmatKamustter(quiz []Quiz) []QuizFormatter {
	quizFormatter := []QuizFormatter{}

	for _, quiz := range quiz {
		QuizFormatter := FortmatQuiz(quiz)
		quizFormatter = append(quizFormatter, QuizFormatter)
	}

	return quizFormatter
}
