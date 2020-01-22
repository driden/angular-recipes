import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';

import { Recipe } from '../Recipe';
import { Ingredient } from '../../shared/Ingredient';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;

  @Output() onAddToShoppingList: EventEmitter<Ingredient[]> = new EventEmitter<
    Ingredient[]
  >();

  constructor(
    private shoppingListSvc: ShoppingListService,
    private recipeService: RecipesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data: Data) => {
      this.recipe = data.recipe;
    });
  }

  addIngredients(): void {
    this.recipe.ingredients.forEach(ing => this.shoppingListSvc.add(ing));
  }

  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  onDeleteRecipe() {
    this.recipeService.delete(this.recipe.id);
    this.router.navigate(['/recipes']);
  }
}
