import { EventEmitter } from "@angular/core";
import { ShoppingListModel } from "./shopping-list.model";

export class ShoppingListService {

    newShopListDisplay = new EventEmitter<ShoppingListModel[]>();

    private shoppingList: ShoppingListModel[] = [
        new ShoppingListModel('Tomato', 20),
        new ShoppingListModel('Rice', 10),
        new ShoppingListModel('Meat', 15),
        new ShoppingListModel('Milk', 5)
    ];

    getShoppingList() {
        return this.shoppingList.slice();
    }

    onDisplayShopListIng(shopListIngAdd: ShoppingListModel) {
        this.shoppingList.push(shopListIngAdd);
        this.newShopListDisplay.emit(this.shoppingList.slice());
    }

    getShopListIng(ingredients: ShoppingListModel[]) {
        this.shoppingList.push(...ingredients);
        this.newShopListDisplay.emit(this.shoppingList.slice());
    }
}