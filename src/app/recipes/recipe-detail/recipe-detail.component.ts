import { Component, Input, OnInit } from '@angular/core';
import { RecipeModel } from '../recipes.model';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipeDetailsDisplay!: RecipeModel;
  recipeDetailsID!: number;

  constructor(private recipesService: RecipesService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.recipeDetailsID = +params['id'];
        this.recipeDetailsDisplay = this.recipesService.getRecipeListByID(this.recipeDetailsID);
      }
    );
  }

  onShopping() {
    this.recipesService.getRecipeIng(this.recipeDetailsDisplay.ingredient);
  }

  onEditing() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

}
