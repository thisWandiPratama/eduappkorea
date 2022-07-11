package handler

import (
	"edukorea/answer"
	"edukorea/helper"
	"net/http"

	"github.com/gin-gonic/gin"
)

type answerHandler struct {
	answerService answer.Service
}

func NewAnswerHandler(answerService answer.Service) *answerHandler {
	return &answerHandler{answerService}
}

// tangkap imputan user
func (h *answerHandler) Save(c *gin.Context) {
	var input answer.InputAnswer
	err := c.ShouldBindJSON(&input)

	if err != nil {

		errors := helper.FormatValidatorError(err)
		errorMessage := gin.H{"errors": errors}

		response := helper.APIResponse("Answer create failed ", http.StatusUnprocessableEntity, "error", errorMessage)
		c.JSON(http.StatusUnprocessableEntity, response)
		return
	}

	createAnswer, err := h.answerService.Save(input)

	if err != nil {
		response := helper.APIResponse("Answer create failed ", http.StatusBadRequest, "error", nil)
		c.JSON(http.StatusBadRequest, response)
		return
	}
	formatter := answer.FortmatAnswer(createAnswer)

	response := helper.APIResponse("Answer has been created", http.StatusOK, "success", formatter)
	c.JSON(http.StatusOK, response)
}

func (h *answerHandler) FindById(c *gin.Context) {
	var input answer.ByIdAnswer
	err := c.ShouldBindJSON(&input)

	if err != nil {

		errors := helper.FormatValidatorError(err)
		errorMessage := gin.H{"errors": errors}

		response := helper.APIResponse("Answer delete failed ", http.StatusUnprocessableEntity, "error", errorMessage)
		c.JSON(http.StatusUnprocessableEntity, response)
		return
	}

	FindById, err := h.answerService.FindById(input.ID)

	if err != nil {
		response := helper.APIResponse("Answer delete failed ", http.StatusBadRequest, "error", nil)
		c.JSON(http.StatusBadRequest, response)
		return
	}

	formatter := answer.FortmatAnswertter(FindById)
	response := helper.APIResponse("Answer has been", http.StatusOK, "success", formatter)
	c.JSON(http.StatusOK, response)
}
