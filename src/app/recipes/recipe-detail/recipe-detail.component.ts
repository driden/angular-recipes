import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Recipe } from "../Recipe";
import { Ingredient } from "src/app/shared/Ingredient";
import { ShoppingListService } from "src/app/shopping-list/shopping-list.service";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"]
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() onAddToShoppingList: EventEmitter<Ingredient[]> = new EventEmitter<
    Ingredient[]
  >();

  constructor(private shoppingListSvc: ShoppingListService) {}

  ngOnInit() {}

  addIngredients(): void {
    this.recipe.ingredients.forEach(ing => this.shoppingListSvc.add(ing));
  }
}
