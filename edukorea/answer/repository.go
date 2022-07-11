package answer

import "gorm.io/gorm"

// karena object / struck lain mengacuk nya ke arah Repository
type Repository interface {
	Save(answer Answer) (Answer, error)
	Update(answer Answer) (Answer, error)
	FindById(ID int) ([]Answer, error)
}

type repository struct {
	db *gorm.DB
}

func NewRepository(db *gorm.DB) *repository {
	return &repository{db}
}

func (r *repository) Save(answer Answer) (Answer, error) {
	err := r.db.Save(&answer).Error
	if err != nil {
		return answer, err
	}
	return answer, nil
}

func (r *repository) Update(answer Answer) (Answer, error) {
	err := r.db.Save(&answer).Error
	if err != nil {
		return answer, err
	}
	return answer, nil
}

func (r *repository) FindById(ID int) ([]Answer, error) {
	var answer []Answer
	err := r.db.Where("user_id=?", ID).Find(&answer).Error
	if err != nil {
		return answer, err
	}
	return answer, nil
}
