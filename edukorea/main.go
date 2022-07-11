package main

import (
	"edukorea/about"
	"edukorea/alphabet"
	"edukorea/answer"
	"edukorea/handler"
	"edukorea/kamus"
	"edukorea/quiz"
	"edukorea/user"
	"log"

	"github.com/gin-gonic/gin"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

func main() {
	dsn := "root:password@tcp(127.0.0.1:3306)/edukorea?charset=utf8mb4&parseTime=True&loc=Local"
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})

	if err != nil {
		log.Fatal(err.Error())
	}

	// user
	userRepository := user.NewRepository(db)
	userService := user.NewService(userRepository)
	userHandler := handler.NewUserHandler(userService)

	// about
	aboutRepository := about.NewRepository(db)
	aboutService := about.NewService(aboutRepository)
	aboutHandler := handler.NewAboutHandler(aboutService)

	// alphabet
	alphabetRepository := alphabet.NewRepository(db)
	alphabetService := alphabet.NewService(alphabetRepository)
	alphabetHandler := handler.NewAlphabetsHandler(alphabetService)

	// kamus
	kamusRepository := kamus.NewRepository(db)
	kamusService := kamus.NewService(kamusRepository)
	kamusHandler := handler.NewKamusHandler(kamusService)

	// quiz
	quizRepository := quiz.NewRepository(db)
	quizService := quiz.NewService(quizRepository)
	quizHandler := handler.NewQuizHandler(quizService)

	// answer
	answerRepository := answer.NewRepository(db)
	answerService := answer.NewService(answerRepository)
	answerHandler := handler.NewAnswerHandler(answerService)

	router := gin.Default()
	api := router.Group("/api/v1")
	// auth
	api.POST("/register", userHandler.RegisterUser)
	api.POST("/login", userHandler.Login)

	// about developer
	api.POST("/about", aboutHandler.UpdateAbout)
	api.GET("/getabout", aboutHandler.GetAbout)

	// alphabet
	api.POST("/save", alphabetHandler.Save)
	api.POST("/update", alphabetHandler.Update)
	api.POST("/delete", alphabetHandler.Delete)
	api.GET("/all", alphabetHandler.FindAll)

	// kamus
	api.POST("/save_kamus", kamusHandler.Save)
	api.POST("/update_kamus", kamusHandler.Update)
	api.POST("/delete_kamus", kamusHandler.Delete)
	api.GET("/all_kamus", kamusHandler.FindAll)
	api.POST("/search_kamus", kamusHandler.Search)

	// kamus
	api.POST("/save_quiz", quizHandler.Save)
	api.POST("/update_quiz", quizHandler.Update)
	api.POST("/delete_quiz", quizHandler.Delete)
	api.GET("/all_quiz", quizHandler.FindAll)

	// answer
	api.POST("/save_answer", answerHandler.Save)
	api.POST("/find_by_user", answerHandler.FindById)

	router.Run()
}
