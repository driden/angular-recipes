import { Component, OnInit } from "@angular/core";
import { Ingredient } from "../shared/Ingredient";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"]
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Tomatoes", 2)
  ];

  constructor() {}

  ngOnInit() {}

  addToShoppingList(newIngredient: Ingredient): void {
    let added: boolean = false;
    for (let i = 0; i < this.ingredients.length; i++) {
      let currObj = this.ingredients[i];
      if (currObj.name.toLowerCase() === newIngredient.name.toLowerCase()) {
        currObj.amount += +newIngredient.amount;
        added = true;
        break;
      }
    }

    if (!added) {
      this.ingredients.push(newIngredient);
    }
  }
}
