package alphabet

import "gorm.io/gorm"

// karena object / struck lain mengacuk nya ke arah Repository
type Repository interface {
	Save(alphabet Alphabets) (Alphabets, error)
	Update(alphabet Alphabets) (Alphabets, error)
	Delete(ID int) (Alphabets, error)
	FindAll() ([]Alphabets, error)
}

type repository struct {
	db *gorm.DB
}

func NewRepository(db *gorm.DB) *repository {
	return &repository{db}
}

func (r *repository) Save(alphabet Alphabets) (Alphabets, error) {
	err := r.db.Save(&alphabet).Error
	if err != nil {
		return alphabet, err
	}
	return alphabet, nil
}

func (r *repository) Update(alphabet Alphabets) (Alphabets, error) {
	err := r.db.Save(&alphabet).Error
	if err != nil {
		return alphabet, err
	}
	return alphabet, nil
}

func (r *repository) Delete(ID int) (Alphabets, error) {
	var alphabet Alphabets
	err := r.db.Delete(&Alphabets{}, ID).Error
	if err != nil {
		return alphabet, err
	}
	return alphabet, nil
}

func (r *repository) FindAll() ([]Alphabets, error) {
	var alphabet []Alphabets
	err := r.db.Find(&alphabet).Error

	if err != nil {
		return alphabet, err
	}
	return alphabet, nil

}
