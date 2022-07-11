package handler

import (
	"edukorea/alphabet"
	"edukorea/helper"
	"net/http"

	"github.com/gin-gonic/gin"
)

type alphabetsHandler struct {
	alphabetsService alphabet.Service
}

func NewAlphabetsHandler(alphabetsService alphabet.Service) *alphabetsHandler {
	return &alphabetsHandler{alphabetsService}
}

// tangkap imputan user
func (h *alphabetsHandler) Save(c *gin.Context) {
	var input alphabet.InputAlphabet
	err := c.ShouldBindJSON(&input)

	if err != nil {

		errors := helper.FormatValidatorError(err)
		errorMessage := gin.H{"errors": errors}

		response := helper.APIResponse("Alphabet create failed ", http.StatusUnprocessableEntity, "error", errorMessage)
		c.JSON(http.StatusUnprocessableEntity, response)
		return
	}

	createAlphabets, err := h.alphabetsService.Save(input)

	if err != nil {
		response := helper.APIResponse("Alphabet create failed ", http.StatusBadRequest, "error", nil)
		c.JSON(http.StatusBadRequest, response)
		return
	}
	formatter := alphabet.FortmatAlphabet(createAlphabets)

	response := helper.APIResponse("Alphabet has been created", http.StatusOK, "success", formatter)
	c.JSON(http.StatusOK, response)
}

func (h *alphabetsHandler) Update(c *gin.Context) {
	var input alphabet.UpdateAlphabet
	err := c.ShouldBindJSON(&input)

	if err != nil {

		errors := helper.FormatValidatorError(err)
		errorMessage := gin.H{"errors": errors}

		response := helper.APIResponse("Alphabet update failed ", http.StatusUnprocessableEntity, "error", errorMessage)
		c.JSON(http.StatusUnprocessableEntity, response)
		return
	}

	updateAlphabet, err := h.alphabetsService.Update(input)

	if err != nil {
		response := helper.APIResponse("Alphabet update failed ", http.StatusBadRequest, "error", nil)
		c.JSON(http.StatusBadRequest, response)
		return
	}
	formatter := alphabet.FortmatAlphabet(updateAlphabet)

	response := helper.APIResponse("Alphabet has been updated", http.StatusOK, "success", formatter)
	c.JSON(http.StatusOK, response)
}

func (h *alphabetsHandler) Delete(c *gin.Context) {
	var input alphabet.DeleteAlphabet
	err := c.ShouldBindJSON(&input)

	if err != nil {

		errors := helper.FormatValidatorError(err)
		errorMessage := gin.H{"errors": errors}

		response := helper.APIResponse("Alphabet delete failed ", http.StatusUnprocessableEntity, "error", errorMessage)
		c.JSON(http.StatusUnprocessableEntity, response)
		return
	}

	deleteAlphabet, err := h.alphabetsService.Delete(input.ID)

	if err != nil {
		response := helper.APIResponse("Alphabet delete failed ", http.StatusBadRequest, "error", nil)
		c.JSON(http.StatusBadRequest, response)
		return
	}
	formatter := alphabet.FortmatAlphabet(deleteAlphabet)

	response := helper.APIResponse("Alphabet has been deleted", http.StatusOK, "success", formatter)
	c.JSON(http.StatusOK, response)
}

func (h *alphabetsHandler) FindAll(c *gin.Context) {
	allAlphabet, err := h.alphabetsService.FindAll()

	if err != nil {
		response := helper.APIResponse("Alphabet find all failed ", http.StatusBadRequest, "error", nil)
		c.JSON(http.StatusBadRequest, response)
		return
	}
	formatter := alphabet.FortmatAlphabetter(allAlphabet)

	response := helper.APIResponse("Alphabet has been find all", http.StatusOK, "success", formatter)
	c.JSON(http.StatusOK, response)
}
