import { Component, Output, EventEmitter } from "@angular/core";
import { ShoppingListService } from "./shopping-list.service";
import { Ingredient } from "../shared/Ingredient";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"]
})
export class ShoppingListComponent {
  // no sirve esto.
  @Output() ingredientChanged = new EventEmitter<Ingredient>();

  constructor(private shopListSvc: ShoppingListService) {}

  onIngredientClicked(clickedIngredient: Ingredient) {
    console.log("Clicked on:", clickedIngredient);
    // no puedo emitir a un hijo, necesito otra cosa.
    this.ingredientChanged.emit(clickedIngredient);
  }
}
