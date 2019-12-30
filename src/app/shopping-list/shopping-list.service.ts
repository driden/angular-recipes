import { Ingredient } from "../shared/Ingredient";

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Tomatoes", 2)
  ];

  getAll(): Ingredient[] {
    return this.ingredients.slice();
  }

  add(ingredient: Ingredient): void {
    const inArray = this.findIngredient(ingredient.name);

    if (inArray) {
      inArray.amount += +ingredient.amount;
    } else {
      this.ingredients.push(ingredient);
    }
  }

  delete(ingredient: Ingredient): void {
    const inArray = this.findIngredient(ingredient.name);

    if (inArray && inArray.amount > ingredient.amount) {
      inArray.amount -= +ingredient.amount;
    } else if (inArray) {
      this.ingredients.splice(this.ingredients.indexOf(inArray), 1);
    }
  }

  private findIngredient(name: string): Ingredient {
    return this.ingredients.find(
      ing => name.toLowerCase() === ing.name.toLowerCase()
    );
  }
}
