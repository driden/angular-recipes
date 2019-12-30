import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { ActivatedRoute, Data } from "@angular/router";

import { Recipe } from "../Recipe";
import { Ingredient } from "../../shared/Ingredient";
import { ShoppingListService } from "../../shopping-list/shopping-list.service";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"]
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;

  @Output() onAddToShoppingList: EventEmitter<Ingredient[]> = new EventEmitter<
    Ingredient[]
  >();

  constructor(
    private shoppingListSvc: ShoppingListService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data: Data) => {
      this.recipe = data["recipe"];
    });
  }

  addIngredients(): void {
    this.recipe.ingredients.forEach(ing => this.shoppingListSvc.add(ing));
  }
}
