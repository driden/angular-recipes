import { Ingredient } from "../shared/Ingredient";

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Tomatoes", 2)
  ];

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  add(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
  }
}
