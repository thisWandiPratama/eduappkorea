package about

import "gorm.io/gorm"

// karena object / struck lain mengacuk nya ke arah Repository
type Repository interface {
	Save(about About) (About, error)
	FindByID(ID int) (About, error)
	GetAbout() (About, error)
}

type repository struct {
	db *gorm.DB
}

func NewRepository(db *gorm.DB) *repository {
	return &repository{db}
}

func (r *repository) Save(about About) (About, error) {
	err := r.db.Save(&about).Error
	if err != nil {
		return about, err
	}
	return about, nil
}

func (r *repository) FindByID(ID int) (About, error) {
	var about About
	err := r.db.Where("id=?", about).Find(&about).Error

	if err != nil {
		return about, err
	}
	return about, nil

}

func (r *repository) GetAbout() (About, error) {
	var about About
	err := r.db.Find(&about).Error

	if err != nil {
		return about, err
	}
	return about, nil

}
