package alphabet

type Service interface {
	Save(input InputAlphabet) (Alphabets, error)
	Update(input UpdateAlphabet) (Alphabets, error)
	Delete(ID int) (Alphabets, error)
	FindAll() ([]Alphabets, error)
}

type service struct {
	repository Repository
}

func NewService(repository Repository) *service {
	return &service{repository}
}

func (s *service) Save(input InputAlphabet) (Alphabets, error) {
	alphabets := Alphabets{}

	alphabets.AlphabetsKorea = input.AlphabetsKorea
	alphabets.AlphabetsIndonesia = input.AlphabetsIndonesia
	alphabets.Consonants = input.Consonants

	inputAlphabet, err := s.repository.Save(alphabets)

	if err != nil {
		return inputAlphabet, err
	}
	return inputAlphabet, nil
}

func (s *service) Update(input UpdateAlphabet) (Alphabets, error) {
	alphabets := Alphabets{}

	alphabets.ID = input.ID
	alphabets.AlphabetsKorea = input.AlphabetsKorea
	alphabets.AlphabetsIndonesia = input.AlphabetsIndonesia
	alphabets.Consonants = input.Consonants

	updateAlphabet, err := s.repository.Update(alphabets)

	if err != nil {
		return updateAlphabet, err
	}
	return updateAlphabet, nil
}

func (s *service) Delete(ID int) (Alphabets, error) {
	deleteAlphabet, err := s.repository.Delete(ID)

	if err != nil {
		return deleteAlphabet, err
	}
	return deleteAlphabet, nil
}

func (s *service) FindAll() ([]Alphabets, error) {
	allAlphabet, err := s.repository.FindAll()

	if err != nil {
		return allAlphabet, err
	}
	return allAlphabet, nil
}
