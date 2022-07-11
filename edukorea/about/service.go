package about

type Service interface {
	UpdateInput(input UpdateInput) (About, error)
	GetAbout() (About, error)
}

type service struct {
	repository Repository
}

func NewService(repository Repository) *service {
	return &service{repository}
}

func (s *service) UpdateInput(input UpdateInput) (About, error) {
	about := About{}

	about.ID = input.ID
	about.AboutsText = input.AboutsText

	updateAbout, err := s.repository.Save(about)

	if err != nil {
		return updateAbout, err
	}
	return updateAbout, nil
}

func (s *service) GetAbout() (About, error) {
	getAbout, err := s.repository.GetAbout()

	if err != nil {
		return getAbout, err
	}
	return getAbout, nil
}
