import { Component, OnInit } from '@angular/core';
import { RecipeModel } from './recipes.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipeDisplay!: RecipeModel;

  constructor(private recipesService: RecipesService) {}

  ngOnInit(): void {
    this.recipesService.recipeDetailsDisplayedOnClick.subscribe(
      (recipeDetails: RecipeModel) => {
        this.recipeDisplay = recipeDetails;
      }
    );
  }

}
