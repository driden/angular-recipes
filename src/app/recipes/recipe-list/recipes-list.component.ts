import { Component } from "@angular/core";
import { RecipesService } from "../recipes.service";
import { Recipe } from "./../Recipe";
@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipes-list.component.html",
  styleUrls: ["./recipes-list.component.css"]
})
export class RecipesListComponent {
  constructor(private recipesService: RecipesService) {}
}
