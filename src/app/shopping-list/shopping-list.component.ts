import { Component } from '@angular/core';
import { ShoppingListModel } from './shopping-list.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {

  shoppingList: ShoppingListModel[] = [
    new ShoppingListModel('Tomato', 20),
    new ShoppingListModel('Rice', 10),
    new ShoppingListModel('Meat', 15),
    new ShoppingListModel('Milk', 5)
  ];

  onDisplayShopListIng(shopListIngAdd: ShoppingListModel) {
    this.shoppingList.push(shopListIngAdd);
  }

}
