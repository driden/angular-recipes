import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Recipe } from "../../Recipe";

@Component({
  selector: "app-recipe-item",
  templateUrl: "./recipe-item.component.html",
  styleUrls: ["./recipe-item.component.css"]
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() recipeSelected = new EventEmitter<Recipe>();
  constructor() {}

  ngOnInit() {}

  onRecipeSelected() {
    console.log(this.recipe);
    this.recipeSelected.emit(this.recipe);
  }
}
