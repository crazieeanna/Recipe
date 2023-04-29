import { EventEmitter } from "@angular/core";
import { ShoppingListModel } from "./shopping-list.model";

export class ShoppingListService {

    newShopListDisplay = new EventEmitter<ShoppingListModel[]>();
    loadShopListItemID = new EventEmitter<number>();

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

    getShopListByID(index: number) {
        return this.shoppingList[index];
    }

    updateShopList(index: number, newShopItem: ShoppingListModel) {
        this.shoppingList[index] = newShopItem;
        this.newShopListDisplay.emit(this.shoppingList.slice());
    }

    deleteShopListItem(index: number) {
        this.shoppingList.splice(index, 1);
        this.newShopListDisplay.emit(this.shoppingList.slice());
    }
}