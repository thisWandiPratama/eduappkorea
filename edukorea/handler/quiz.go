package handler

import (
	"edukorea/helper"
	"edukorea/quiz"
	"net/http"

	"github.com/gin-gonic/gin"
)

type quizHandler struct {
	quizService quiz.Service
}

func NewQuizHandler(quizService quiz.Service) *quizHandler {
	return &quizHandler{quizService}
}

// tangkap imputan user
func (h *quizHandler) Save(c *gin.Context) {
	var input quiz.InputQuiz
	err := c.ShouldBindJSON(&input)

	if err != nil {

		errors := helper.FormatValidatorError(err)
		errorMessage := gin.H{"errors": errors}

		response := helper.APIResponse("Quiz create failed ", http.StatusUnprocessableEntity, "error", errorMessage)
		c.JSON(http.StatusUnprocessableEntity, response)
		return
	}

	createQuiz, err := h.quizService.Save(input)

	if err != nil {
		response := helper.APIResponse("Quiz create failed ", http.StatusBadRequest, "error", nil)
		c.JSON(http.StatusBadRequest, response)
		return
	}
	formatter := quiz.FortmatQuiz(createQuiz)

	response := helper.APIResponse("Quiz has been created", http.StatusOK, "success", formatter)
	c.JSON(http.StatusOK, response)
}

func (h *quizHandler) Update(c *gin.Context) {
	var input quiz.UpdateQuiz
	err := c.ShouldBindJSON(&input)

	if err != nil {

		errors := helper.FormatValidatorError(err)
		errorMessage := gin.H{"errors": errors}

		response := helper.APIResponse("Quiz update failed ", http.StatusUnprocessableEntity, "error", errorMessage)
		c.JSON(http.StatusUnprocessableEntity, response)
		return
	}

	updateQuiz, err := h.quizService.Update(input)

	if err != nil {
		response := helper.APIResponse("Quiz update failed ", http.StatusBadRequest, "error", nil)
		c.JSON(http.StatusBadRequest, response)
		return
	}
	formatter := quiz.FortmatQuiz(updateQuiz)

	response := helper.APIResponse("Quiz has been updated", http.StatusOK, "success", formatter)
	c.JSON(http.StatusOK, response)
}

func (h *quizHandler) Delete(c *gin.Context) {
	var input quiz.DeleteQuiz
	err := c.ShouldBindJSON(&input)

	if err != nil {

		errors := helper.FormatValidatorError(err)
		errorMessage := gin.H{"errors": errors}

		response := helper.APIResponse("Quiz delete failed ", http.StatusUnprocessableEntity, "error", errorMessage)
		c.JSON(http.StatusUnprocessableEntity, response)
		return
	}

	DeleteQuiz, err := h.quizService.Delete(input.ID)

	if err != nil {
		response := helper.APIResponse("Quiz delete failed ", http.StatusBadRequest, "error", nil)
		c.JSON(http.StatusBadRequest, response)
		return
	}
	formatter := quiz.FortmatQuiz(DeleteQuiz)

	response := helper.APIResponse("Quiz has been deleted", http.StatusOK, "success", formatter)
	c.JSON(http.StatusOK, response)
}

func (h *quizHandler) FindAll(c *gin.Context) {
	allQuiz, err := h.quizService.FindAll()

	if err != nil {
		response := helper.APIResponse("Quiz find all failed ", http.StatusBadRequest, "error", nil)
		c.JSON(http.StatusBadRequest, response)
		return
	}
	formatter := quiz.FortmatKamustter(allQuiz)
	response := helper.APIResponse("Quiz has been find all", http.StatusOK, "success", formatter)
	c.JSON(http.StatusOK, response)
}
