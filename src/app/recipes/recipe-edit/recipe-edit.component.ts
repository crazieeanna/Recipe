import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent {

  recipeEditID!: number;
  recipeEdit = false;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(
      (params: Params) => {
        this.recipeEditID = +params['id'];
        this.recipeEdit = params['id'] !=null ? true : false;
        console.log(this.recipeEdit);
      }
    );
  }

}
