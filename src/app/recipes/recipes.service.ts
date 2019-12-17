import { Recipe } from "./Recipe";

export class RecipesService {
  private recipes: Recipe[] = [
    new Recipe(
      "Recipe1",
      "test recipe1",
      "https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg"
    ),
    new Recipe(
      "A Test Recipe",
      "This is just a test recipe",
      "https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg"
    )
  ];

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}
