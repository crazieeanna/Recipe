import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ShoppingListRoutingModule } from "./shopping-list-routing.module";

import { ShoppingListComponent } from "./shopping-list.component";
import { ShoppingListEditComponent } from "./shopping-list-edit/shopping-list-edit.component";



@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingListEditComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,
        ShoppingListRoutingModule
    ]
})

export class ShoppingListModule {}