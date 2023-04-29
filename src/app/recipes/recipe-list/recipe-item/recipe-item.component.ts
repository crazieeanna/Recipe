import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RecipeModel } from '../../recipes.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {

  @Input() recipeListDisplayed!: RecipeModel;
  @Input() recipeItemID!: number;

}
