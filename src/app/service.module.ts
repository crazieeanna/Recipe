import { NgModule } from "@angular/core";
import { RecipesService } from "./recipes/recipes.service";
import { ShoppingListService } from "./shopping-list/shopping-list.service";
import { DataStorageService } from "./shared/data-storage.service";
import { AuthService } from "./auth/auth.service";
import { AuthGuard } from "./auth-guard";

@NgModule({
    providers: [
        RecipesService, 
        ShoppingListService, 
        DataStorageService, 
        AuthService, 
        AuthGuard
    ],
})

export class ServiceModule{}