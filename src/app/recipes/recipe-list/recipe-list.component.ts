import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipeModel } from '../recipes.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {


  recipeList: RecipeModel[] = [];

  constructor(private recipesService: RecipesService) {}

  ngOnInit() {
    this.recipeList = this.recipesService.getRecipeList();
  }

}
