package handler

import (
	"edukorea/helper"
	"edukorea/kamus"
	"net/http"

	"github.com/gin-gonic/gin"
)

type kamusHandler struct {
	kamusService kamus.Service
}

func NewKamusHandler(kamusService kamus.Service) *kamusHandler {
	return &kamusHandler{kamusService}
}

// tangkap imputan user
func (h *kamusHandler) Save(c *gin.Context) {
	var input kamus.InputKamus
	err := c.ShouldBindJSON(&input)

	if err != nil {

		errors := helper.FormatValidatorError(err)
		errorMessage := gin.H{"errors": errors}

		response := helper.APIResponse("Kamus create failed ", http.StatusUnprocessableEntity, "error", errorMessage)
		c.JSON(http.StatusUnprocessableEntity, response)
		return
	}

	createKamus, err := h.kamusService.Save(input)

	if err != nil {
		response := helper.APIResponse("Kamus create failed ", http.StatusBadRequest, "error", nil)
		c.JSON(http.StatusBadRequest, response)
		return
	}
	formatter := kamus.FortmatAlphabet(createKamus)

	response := helper.APIResponse("Kamus has been created", http.StatusOK, "success", formatter)
	c.JSON(http.StatusOK, response)
}

func (h *kamusHandler) Update(c *gin.Context) {
	var input kamus.UpdateKamus
	err := c.ShouldBindJSON(&input)

	if err != nil {

		errors := helper.FormatValidatorError(err)
		errorMessage := gin.H{"errors": errors}

		response := helper.APIResponse("Kamus update failed ", http.StatusUnprocessableEntity, "error", errorMessage)
		c.JSON(http.StatusUnprocessableEntity, response)
		return
	}

	updateKamus, err := h.kamusService.Update(input)

	if err != nil {
		response := helper.APIResponse("Kamus update failed ", http.StatusBadRequest, "error", nil)
		c.JSON(http.StatusBadRequest, response)
		return
	}
	formatter := kamus.FortmatAlphabet(updateKamus)

	response := helper.APIResponse("Kamus has been updated", http.StatusOK, "success", formatter)
	c.JSON(http.StatusOK, response)
}

func (h *kamusHandler) Delete(c *gin.Context) {
	var input kamus.DeleteKamus
	err := c.ShouldBindJSON(&input)

	if err != nil {

		errors := helper.FormatValidatorError(err)
		errorMessage := gin.H{"errors": errors}

		response := helper.APIResponse("Kamus delete failed ", http.StatusUnprocessableEntity, "error", errorMessage)
		c.JSON(http.StatusUnprocessableEntity, response)
		return
	}

	DeleteKamus, err := h.kamusService.Delete(input.ID)

	if err != nil {
		response := helper.APIResponse("Kamus delete failed ", http.StatusBadRequest, "error", nil)
		c.JSON(http.StatusBadRequest, response)
		return
	}
	formatter := kamus.FortmatAlphabet(DeleteKamus)

	response := helper.APIResponse("Kamus has been deleted", http.StatusOK, "success", formatter)
	c.JSON(http.StatusOK, response)
}

func (h *kamusHandler) FindAll(c *gin.Context) {
	allKamus, err := h.kamusService.FindAll()

	if err != nil {
		response := helper.APIResponse("Alphabet find all failed ", http.StatusBadRequest, "error", nil)
		c.JSON(http.StatusBadRequest, response)
		return
	}
	formatter := kamus.FortmatKamustter(allKamus)

	response := helper.APIResponse("Kamus has been find all", http.StatusOK, "success", formatter)
	c.JSON(http.StatusOK, response)
}

func (h *kamusHandler) Search(c *gin.Context) {
	var input kamus.Search
	err := c.ShouldBindJSON(&input)

	if err != nil {

		errors := helper.FormatValidatorError(err)
		errorMessage := gin.H{"errors": errors}

		response := helper.APIResponse("Kamus search failed ", http.StatusUnprocessableEntity, "error", errorMessage)
		c.JSON(http.StatusUnprocessableEntity, response)
		return
	}

	DeleteKamus, err := h.kamusService.Search(input)

	if err != nil {
		response := helper.APIResponse("Kamus search failed ", http.StatusBadRequest, "error", nil)
		c.JSON(http.StatusBadRequest, response)
		return
	}
	formatter := kamus.FortmatKamustter(DeleteKamus)

	response := helper.APIResponse("Kamus has been search", http.StatusOK, "success", formatter)
	c.JSON(http.StatusOK, response)
}
