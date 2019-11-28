import { Component, OnInit } from "@angular/core";
import { Recipe } from "./Recipe";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.css"]
})
export class RecipesComponent implements OnInit {
  recipeDetail: Recipe;

  constructor() {}

  ngOnInit() {}

  handleSelectedRecipe(recipe) {
    console.log(recipe);
    this.recipeDetail = recipe;
  }
}
