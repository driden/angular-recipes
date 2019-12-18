import { Component, ViewChild, ElementRef } from "@angular/core";
import { Ingredient } from "src/app/shared/Ingredient";
import { ShoppingListService } from "../shopping-list.service";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"]
})
export class ShoppingEditComponent {
  @ViewChild("nameInput", { static: false }) nameInputRef: ElementRef;
  @ViewChild("amountInput", { static: false }) amountInputRef: ElementRef;

  constructor(private shpSvc: ShoppingListService) {}

  onAddItem(): void {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = +this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.shpSvc.add(newIngredient);
  }

  onDeleteItem(): void {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = +this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.shpSvc.delete(newIngredient);
  }

  onClearItem(): void {
    this.nameInputRef.nativeElement.value = "";
    this.amountInputRef.nativeElement.value = "";
  }
}
