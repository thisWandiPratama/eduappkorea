package quiz

type Service interface {
	Save(input InputQuiz) (Quiz, error)
	Update(input UpdateQuiz) (Quiz, error)
	Delete(ID int) (Quiz, error)
	FindAll() ([]Quiz, error)
}

type service struct {
	repository Repository
}

func NewService(repository Repository) *service {
	return &service{repository}
}

func (s *service) Save(input InputQuiz) (Quiz, error) {
	Quiz := Quiz{}

	Quiz.Quiz = input.Quiz
	Quiz.A = input.A
	Quiz.B = input.B
	Quiz.C = input.C
	Quiz.D = input.D
	Quiz.Correct = input.Currect

	InputQuiz, err := s.repository.Save(Quiz)

	if err != nil {
		return InputQuiz, err
	}
	return InputQuiz, nil
}

func (s *service) Update(input UpdateQuiz) (Quiz, error) {
	Quiz := Quiz{}

	Quiz.ID = input.ID
	Quiz.Quiz = input.Quiz
	Quiz.A = input.A
	Quiz.B = input.B
	Quiz.C = input.C
	Quiz.D = input.D
	Quiz.Correct = input.Currect

	updateQuiz, err := s.repository.Update(Quiz)

	if err != nil {
		return updateQuiz, err
	}
	return updateQuiz, nil
}

func (s *service) Delete(ID int) (Quiz, error) {
	DeleteQuiz, err := s.repository.Delete(ID)

	if err != nil {
		return DeleteQuiz, err
	}
	return DeleteQuiz, nil
}

func (s *service) FindAll() ([]Quiz, error) {
	allQuiz, err := s.repository.FindAll()

	if err != nil {
		return allQuiz, err
	}
	return allQuiz, nil
}
