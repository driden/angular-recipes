import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Recipe } from "../Recipe";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipes-list.component.html",
  styleUrls: ["./recipes-list.component.css"]
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "Recipe1",
      "test recipe1",
      "https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg"
    ),
    new Recipe(
      "A Test Recipe",
      "This is just a test recipe",
      "https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg"
    )
  ];

  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() {}

  publishRecipe(recipe) {
    this.recipeSelected.emit(recipe);
  }
  ngOnInit() {}
}
