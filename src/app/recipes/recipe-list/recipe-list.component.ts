import { Component, EventEmitter, Output } from '@angular/core';
import { RecipeModel } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  @Output() recipeListOnDisplay = new EventEmitter<RecipeModel>();

  recipeList: RecipeModel[] = [
    new RecipeModel('Spagetti', 'Bolognese', 'https://i.pinimg.com/736x/61/51/56/615156cd7381f1b83c9dfbb572efff91.jpg'),
    new RecipeModel('Baath', 'Bisi Bele Baath', 'https://i.pinimg.com/736x/23/5f/15/235f152f9c8aa926654d7cf8b46b9c21.jpg'),
    new RecipeModel('Sushi', 'Temakizushi', 'https://i.pinimg.com/736x/94/d1/9f/94d19f6785d47ba3028026996e0eee6b.jpg'),
    new RecipeModel('Coffee', 'Filter Coffee', 'https://i.pinimg.com/736x/0f/74/56/0f74560312ba6a92f8b75b48e5244d79--best-coffee-hav.jpg')
  ];

  onRecipeListOnDisplay(recipeDisplay: RecipeModel) {
    this.recipeListOnDisplay.emit(recipeDisplay);
  }

}
