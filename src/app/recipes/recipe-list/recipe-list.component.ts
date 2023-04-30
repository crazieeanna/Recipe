import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipeModel } from '../recipes.model';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {


  recipeList: RecipeModel[] = [];

  constructor(private recipesService: RecipesService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.recipeList = this.recipesService.getRecipeList();
    this.recipesService.recipeDetailsDisplayedOnClick.subscribe(
      (recipe: RecipeModel[]) => {
        this.recipeList = recipe;
      }
    );
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
