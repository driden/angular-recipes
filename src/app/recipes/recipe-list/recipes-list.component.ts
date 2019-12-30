import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Recipe } from "../Recipe";
import { RecipesService } from "../recipes.service";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipes-list.component.html",
  styleUrls: ["./recipes-list.component.css"]
})
export class RecipesListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor(private recipesService: RecipesService) {}

  publishRecipe(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
  ngOnInit() {}
}
