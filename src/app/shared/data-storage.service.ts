import { HttpClient } from "@angular/common/http";
import { RecipesService } from "../recipes/recipes.service";
import { Injectable } from "@angular/core";
import { RecipeModel } from "../recipes/recipes.model";

@Injectable()
export class DataStorageService {
    constructor(private http: HttpClient, private recipesService: RecipesService) {}

    onSaveData() {
        const recipeList = this.recipesService.getRecipeList();
        this.http.put('https://annu-ang-pro-default-rtdb.firebaseio.com/recipeList.json', recipeList).subscribe(
            saveRecipeData => {
                console.log(saveRecipeData);
            }
        );
    }

    onFetchData() {
        this.http.get<RecipeModel[]>('https://annu-ang-pro-default-rtdb.firebaseio.com/recipeList.json').subscribe(
            fetchRecipeData => {
                this.recipesService.setRecipeList(fetchRecipeData);
                console.log(fetchRecipeData);
            }
        );
    }
}
