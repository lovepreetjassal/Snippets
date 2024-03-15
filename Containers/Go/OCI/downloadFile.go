package main

import (
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
	"time"
)

func main() {
	response, _ := http.Get("https://upload.wikimedia.org/wikipedia/commons/5/56/The_Sounds_of_Earth_Record_Cover_-_GPN-2000-001978.jpg")
	t := time.Now()
	timestamp := t.Format("20060102150405")
	fileName := fmt.Sprintf("image_%s.jpg", timestamp)
	file, err := os.Create(fileName)
	if err != nil {
		log.Fatal(err)
	}
	defer file.Close()

	io.Copy(file, response.Body)
}
