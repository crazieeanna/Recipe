import { EventEmitter, Injectable } from "@angular/core";
import { RecipeModel } from "./recipes.model";
import { ShoppingListModel } from "../shopping-list/shopping-list.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipesService {

    recipeDetailsDisplayedOnClick = new EventEmitter<RecipeModel[]>();

    constructor(private shoppingListService: ShoppingListService) {}

    private recipeList: RecipeModel[] = [
        new RecipeModel('Spagetti', 'Bolognese', 'https://i.pinimg.com/736x/61/51/56/615156cd7381f1b83c9dfbb572efff91.jpg', [new ShoppingListModel('Tomato', 20)]),
        new RecipeModel('Baath', 'Bisi Bele Baath', 'https://i.pinimg.com/736x/23/5f/15/235f152f9c8aa926654d7cf8b46b9c21.jpg', [new ShoppingListModel('Rice', 10)]),
        new RecipeModel('Sushi', 'Temakizushi', 'https://i.pinimg.com/736x/94/d1/9f/94d19f6785d47ba3028026996e0eee6b.jpg', [new ShoppingListModel('Meat', 15)]),
        new RecipeModel('Coffee', 'Filter Coffee', 'https://i.pinimg.com/736x/0f/74/56/0f74560312ba6a92f8b75b48e5244d79--best-coffee-hav.jpg', [new ShoppingListModel('Milk', 5)])
    ];

    getRecipeList() {
        return this.recipeList.slice();
    }

    getRecipeIng(recipeIng: ShoppingListModel[]) {
        this.shoppingListService.getShopListIng(recipeIng);
    }

    getRecipeListByID(index: number) {
        return this.recipeList[index];
    }

    addRecipeEditList(recipe: RecipeModel) {
        this.recipeList.push(recipe);
        this.recipeDetailsDisplayedOnClick.emit(this.recipeList.slice());
    }

    updateRecipeEditList(index: number, newRecipe: RecipeModel) {
        this.recipeList[index] = newRecipe;
        this.recipeDetailsDisplayedOnClick.emit(this.recipeList.slice());
    }

    deleteRecipeList(index: number) {
        this.recipeList.splice(index, 1);
        this.recipeDetailsDisplayedOnClick.emit(this.recipeList.slice());
    }

    setRecipeList(recipe: RecipeModel[] ) {
        this.recipeList = recipe;
        this.recipeDetailsDisplayedOnClick.emit(this.recipeList.slice());
    }
}