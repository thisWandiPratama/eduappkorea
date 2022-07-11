package quiz

import "gorm.io/gorm"

// karena object / struck lain mengacuk nya ke arah Repository
type Repository interface {
	Save(quiz Quiz) (Quiz, error)
	Update(quiz Quiz) (Quiz, error)
	Delete(ID int) (Quiz, error)
	FindAll() ([]Quiz, error)
}

type repository struct {
	db *gorm.DB
}

func NewRepository(db *gorm.DB) *repository {
	return &repository{db}
}

func (r *repository) Save(quiz Quiz) (Quiz, error) {
	err := r.db.Save(&quiz).Error
	if err != nil {
		return quiz, err
	}
	return quiz, nil
}

func (r *repository) Update(quiz Quiz) (Quiz, error) {
	err := r.db.Save(&quiz).Error
	if err != nil {
		return quiz, err
	}
	return quiz, nil
}

func (r *repository) Delete(ID int) (Quiz, error) {
	var quiz Quiz
	err := r.db.Delete(&Quiz{}, ID).Error
	if err != nil {
		return quiz, err
	}
	return quiz, nil
}

func (r *repository) FindAll() ([]Quiz, error) {
	var quiz []Quiz
	err := r.db.Find(&quiz).Error

	if err != nil {
		return quiz, err
	}
	return quiz, nil

}
