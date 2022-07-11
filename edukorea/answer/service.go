package answer

import "time"

type Service interface {
	Save(input InputAnswer) (Answer, error)
	FindById(ID int) ([]Answer, error)
}

type service struct {
	repository Repository
}

func NewService(repository Repository) *service {
	return &service{repository}
}

func (s *service) Save(input InputAnswer) (Answer, error) {
	Answer := Answer{}

	Answer.UserID = input.UserID
	Answer.NoQuiz = input.NoQuiz
	Answer.Answer = input.Answer
	CodeAnswer := time.Now().Local().GoString()
	Answer.CodeQuiz = CodeAnswer

	InputAnswer, err := s.repository.Save(Answer)

	if err != nil {
		return InputAnswer, err
	}
	return InputAnswer, nil
}

func (s *service) FindById(ID int) ([]Answer, error) {
	AnswerById, err := s.repository.FindById(ID)

	if err != nil {
		return AnswerById, err
	}

	return AnswerById, nil
}
