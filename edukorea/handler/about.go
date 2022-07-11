package handler

import (
	"edukorea/about"
	"edukorea/helper"
	"net/http"

	"github.com/gin-gonic/gin"
)

type aboutHandler struct {
	aboutService about.Service
}

func NewAboutHandler(aboutService about.Service) *aboutHandler {
	return &aboutHandler{aboutService}
}

// tangkap imputan user
func (h *aboutHandler) UpdateAbout(c *gin.Context) {
	var input about.UpdateInput
	err := c.ShouldBindJSON(&input)

	if err != nil {

		errors := helper.FormatValidatorError(err)
		errorMessage := gin.H{"errors": errors}

		response := helper.APIResponse("About update failed ", http.StatusUnprocessableEntity, "error", errorMessage)
		c.JSON(http.StatusUnprocessableEntity, response)
		return
	}

	updateAbout, err := h.aboutService.UpdateInput(input)

	if err != nil {
		response := helper.APIResponse("About update failed ", http.StatusBadRequest, "error", nil)
		c.JSON(http.StatusBadRequest, response)
		return
	}
	formatter := about.FortmatAbout(updateAbout)

	response := helper.APIResponse("About has been updated", http.StatusOK, "success", formatter)
	c.JSON(http.StatusOK, response)
}

func (h *aboutHandler) GetAbout(c *gin.Context) {
	getAbout, err := h.aboutService.GetAbout()
	if err != nil {
		response := helper.APIResponse("Get update failed ", http.StatusBadRequest, "error", nil)
		c.JSON(http.StatusBadRequest, response)
		return
	}
	formatter := about.FortmatAbout(getAbout)

	response := helper.APIResponse("Get has been updated", http.StatusOK, "success", formatter)
	c.JSON(http.StatusOK, response)
}
