import { Recipe } from "./Recipe";
import { Ingredient } from "../shared/Ingredient";
export class RecipesService {
  private recipes: Recipe[] = [
    new Recipe(
      "Recipe1",
      "test recipe1",
      "https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg",
      [new Ingredient("Avocado", 2), new Ingredient("Potato", 4)]
    ),
    new Recipe(
      "A Test Recipe",
      "This is just a test recipe",
      "https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg",
      [new Ingredient("Meat", 1), new Ingredient("Corn", 10)]
    )
  ];

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}
