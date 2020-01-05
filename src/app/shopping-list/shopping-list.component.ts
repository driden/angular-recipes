import { Component, OnInit } from "@angular/core";
import { Subject, Observable } from "rxjs";

import { Ingredient } from "../shared/Ingredient";
import { ShoppingListService } from "./shopping-list.service";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"]
})
export class ShoppingListComponent implements OnInit {
  ingredientChanged = new Subject<Ingredient>();
  obsIngredient: Observable<Ingredient>;

  ngOnInit(): void {
    this.obsIngredient = this.ingredientChanged.asObservable();
  }

  onIngredientClicked(clickedIngredient: Ingredient) {
    this.ingredientChanged.next(clickedIngredient);
  }

  constructor(private shopListSvc: ShoppingListService) {}
}
