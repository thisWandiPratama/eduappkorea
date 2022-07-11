package kamus

type Service interface {
	Save(input InputKamus) (Kamus, error)
	Update(input UpdateKamus) (Kamus, error)
	Delete(ID int) (Kamus, error)
	FindAll() ([]Kamus, error)
	Search(input Search) ([]Kamus, error)
}

type service struct {
	repository Repository
}

func NewService(repository Repository) *service {
	return &service{repository}
}

func (s *service) Save(input InputKamus) (Kamus, error) {
	Kamus := Kamus{}

	Kamus.WordKorea = input.WordKorea
	Kamus.WordIndonesia = input.WordIndonesia
	Kamus.Consonants = input.Consonants

	inputKamus, err := s.repository.Save(Kamus)

	if err != nil {
		return inputKamus, err
	}
	return inputKamus, nil
}

func (s *service) Update(input UpdateKamus) (Kamus, error) {
	Kamus := Kamus{}

	Kamus.ID = input.ID
	Kamus.WordKorea = input.WordKorea
	Kamus.WordIndonesia = input.WordIndonesia
	Kamus.Consonants = input.Consonants

	updateKamus, err := s.repository.Update(Kamus)

	if err != nil {
		return updateKamus, err
	}
	return updateKamus, nil
}

func (s *service) Delete(ID int) (Kamus, error) {
	DeleteKamus, err := s.repository.Delete(ID)

	if err != nil {
		return DeleteKamus, err
	}
	return DeleteKamus, nil
}

func (s *service) FindAll() ([]Kamus, error) {
	allKamus, err := s.repository.FindAll()

	if err != nil {
		return allKamus, err
	}
	return allKamus, nil
}

func (s *service) Search(input Search) ([]Kamus, error) {
	allKamus, err := s.repository.Search(input)

	if err != nil {
		return allKamus, err
	}
	return allKamus, nil
}
