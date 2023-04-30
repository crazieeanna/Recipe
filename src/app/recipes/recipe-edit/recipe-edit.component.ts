import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { RecipeModel } from '../recipes.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent {

  recipeEditID!: number;
  recipeEdit = false;
  recipeEditForm!: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router, private recipesService: RecipesService) {
    this.route.params.subscribe(
      (params: Params) => {
        this.recipeEditID = +params['id'];
        this.recipeEdit = params['id'] !=null ? true : false;
        console.log(this.recipeEdit);
        this.onRecipeFormInitial();
      }
    );
  }

  private onRecipeFormInitial() {
    let recipeName = '';
    let recipeDescription = '';
    let recipeImage = '';
    if(this.recipeEdit === true) {
      const recipeEditDetails = this.recipesService.getRecipeListByID(this.recipeEditID);
      recipeName = recipeEditDetails.name;
      recipeDescription = recipeEditDetails.description;
      recipeImage = recipeEditDetails.image;
    }
    this.recipeEditForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      description: new FormControl(recipeDescription, Validators.required),
      image: new FormControl(recipeImage, Validators.required)
    });
  }

  onSubmitRecipeEditForm() {
    console.log(this.recipeEditForm);
    /* Different approach to retrieving new recipe in recipeList */
    // const recipeListEditValue = this.recipeEditForm.value;
    // const recipeListEdit = new RecipeModel(recipeListEditValue.name, recipeListEditValue.image, recipeListEditValue.description,recipeListEditValue.ingredient);
    /* This is the approach */
    if(this.recipeEdit === true) {
      this.recipesService.updateRecipeEditList(this.recipeEditID, this.recipeEditForm.value);
    } else {
      this.recipesService.addRecipeEditList(this.recipeEditForm.value);
    }
    this.router.navigate(['/recipes'], {relativeTo: this.route});
  }

  onCancel() {
    this.router.navigate(['/recipes'], {relativeTo: this.route});
  }

}