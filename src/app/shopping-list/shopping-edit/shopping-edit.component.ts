import {
  Component,
  ViewChild,
  ElementRef,
  Input,
  OnInit,
  OnDestroy
} from "@angular/core";
import { Ingredient } from "src/app/shared/Ingredient";
import { ShoppingListService } from "../shopping-list.service";
import { Observable, Subscription } from "rxjs";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"]
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild("nameInput", { static: false }) nameInputRef: ElementRef;
  @ViewChild("amountInput", { static: false }) amountInputRef: ElementRef;
  @Input() selectedIngredient: Observable<Ingredient>;
  ingredientChangeSubscription: Subscription;

  ngOnInit(): void {
    this.ingredientChangeSubscription = this.selectedIngredient.subscribe(
      ingredient => {
        console.log("cambio en el observer");
        this.nameInputRef.nativeElement.value = ingredient.name;
        this.amountInputRef.nativeElement.value = ingredient.amount;
      }
    );
  }

  ngOnDestroy(): void {
    this.ingredientChangeSubscription.unsubscribe();
  }

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
