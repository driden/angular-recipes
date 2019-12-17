import { Component, OnInit } from "@angular/core";
import { Ingredient } from "../shared/Ingredient";
import { ShoppingListService } from "./shopping-list.service";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"],
  providers: [ShoppingListService]
})
export class ShoppingListComponent implements OnInit {
  constructor(private shopListSvc: ShoppingListService) {}
  ingredients: Ingredient[];

  ngOnInit() {
    this.ingredients = this.shopListSvc.getAll();
  }

  private findIngredient(name: string): Ingredient {
    return this.ingredients.filter(
      (ing, index) => name.toLowerCase() === ing.name.toLowerCase()
    )[0];
  }

  onIngredientAdded(ingredient: Ingredient): void {
    const ingredientInList: Ingredient = this.findIngredient(ingredient.name);

    if (ingredientInList) {
      ingredientInList.amount += +ingredient.amount;
    } else {
      this.ingredients.push(ingredient);
    }
  }

  onIngredientDeleted(ingredient: Ingredient): void {
    const ingredientInList: Ingredient = this.findIngredient(ingredient.name);
  }
}
