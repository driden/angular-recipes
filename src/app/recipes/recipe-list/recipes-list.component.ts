import { Component, OnInit } from '@angular/core';
import { Recipe } from '../Recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is just a test recipe', 'https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
