import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeDetailResolver } from './recipes/recipe-detail/recipe-detail-resolver.service';
import { NoRecipeComponent } from './recipes/no-recipe/no-recipe.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipesResolverService } from './recipes/recipe-list/recipes-resolver.service';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'shopping-list', component: ShoppingListComponent },
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      { path: '', pathMatch: 'full', component: NoRecipeComponent },
      { path: 'new', component: RecipeEditComponent },
      {
        path: ':id/edit',
        component: RecipeEditComponent,
        resolve: { foo: RecipesResolverService }
      },
      {
        path: ':id',
        component: RecipeDetailComponent,
        resolve: {
          recipes: RecipesResolverService,
          recipe: RecipeDetailResolver
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
