package main

import "github.com/sam-maton/go-refresh/internal/models"

type templateData struct {
	Snippet  *models.Snippet
	Snippets []models.Snippet
}
