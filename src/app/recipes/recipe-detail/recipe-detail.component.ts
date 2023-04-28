import { Component, Input } from '@angular/core';
import { RecipeModel } from '../recipes.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {

  @Input() recipeDetailsDisplay!: RecipeModel;

}
