import { Component } from '@angular/core';
import { RecipeModel } from './recipes.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {

  recipeDisplay!: RecipeModel;

  onRecipeDetailDisplay(recipes: RecipeModel) {
    this.recipeDisplay = recipes;
  }

}
