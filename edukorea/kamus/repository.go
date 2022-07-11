package kamus

import "gorm.io/gorm"

// karena object / struck lain mengacuk nya ke arah Repository
type Repository interface {
	Save(kamus Kamus) (Kamus, error)
	Update(alphabet Kamus) (Kamus, error)
	Delete(ID int) (Kamus, error)
	FindAll() ([]Kamus, error)
	Search(input Search) ([]Kamus, error)
}

type repository struct {
	db *gorm.DB
}

func NewRepository(db *gorm.DB) *repository {
	return &repository{db}
}

func (r *repository) Save(kamus Kamus) (Kamus, error) {
	err := r.db.Save(&kamus).Error
	if err != nil {
		return kamus, err
	}
	return kamus, nil
}

func (r *repository) Update(kamus Kamus) (Kamus, error) {
	err := r.db.Save(&kamus).Error
	if err != nil {
		return kamus, err
	}
	return kamus, nil
}

func (r *repository) Delete(ID int) (Kamus, error) {
	var kamus Kamus
	err := r.db.Delete(&Kamus{}, ID).Error
	if err != nil {
		return kamus, err
	}
	return kamus, nil
}

func (r *repository) FindAll() ([]Kamus, error) {
	var kamus []Kamus
	err := r.db.Find(&kamus).Error

	if err != nil {
		return kamus, err
	}
	return kamus, nil

}

func (r *repository) Search(input Search) ([]Kamus, error) {
	var kamus []Kamus
	dataName := "%" + input.search + "%"
	err := r.db.Where("word_indonesia LIKE ?", dataName).Find(&kamus).Error
	if err != nil {
		return kamus, err
	}
	return kamus, nil

}
