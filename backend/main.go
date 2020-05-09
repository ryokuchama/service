package main

import "database/sql"
import "github.com/gin-gonic/gin"
import "github.com/go-sql-driver/mysql"
import "fmt"

func main() {
	r := gin.Default()
	r.GET("")
}