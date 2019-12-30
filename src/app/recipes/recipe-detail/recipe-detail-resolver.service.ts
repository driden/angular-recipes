import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs";

import { RecipesService } from "../recipes.service";
import { Recipe } from "../Recipe";

@Injectable()
export class RecipeDetailResolver implements Resolve<Recipe> {
  constructor(private recipeService: RecipesService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Recipe | Observable<Recipe> | Promise<Recipe> {
    return this.recipeService
      .getRecipes()
      .find((r: Recipe) => r.id === +route.params["id"]);
  }
}
