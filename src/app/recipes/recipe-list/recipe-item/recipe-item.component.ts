import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RecipeModel } from '../../recipes.model';
import { RecipesService } from '../../recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {

  @Input() recipeListDisplayed!: RecipeModel;

  constructor(private recipesService: RecipesService) {}

  onRecipeItemClicked() {
    this.recipesService.recipeDetailsDisplayedOnClick.emit(this.recipeListDisplayed);
  }

}
