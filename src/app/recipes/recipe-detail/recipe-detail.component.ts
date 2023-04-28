import { Component, Input } from '@angular/core';
import { RecipeModel } from '../recipes.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {

  @Input() recipeDetailsDisplay!: RecipeModel;

  constructor(private recipesService: RecipesService) {}

  onShopping() {
    this.recipesService.getRecipeIng(this.recipeDetailsDisplay.ingredient);
  }

}
