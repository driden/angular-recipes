import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter
} from "@angular/core";
import { Ingredient } from "src/app/shared/Ingredient";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"]
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("inputName", { static: false }) inputNameRef: ElementRef;
  @ViewChild("inputAmount", { static: false }) inputAmountRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() {}

  ngOnInit() {}

  onAddIngredient() {
    let ingredient: string = this.inputNameRef.nativeElement.value;
    let amount: number = this.inputAmountRef.nativeElement.value;

    this.ingredientAdded.emit(new Ingredient(ingredient, amount));
  }
}
