import { Component, OnInit } from '@angular/core';
import { ShoppingListModel } from './shopping-list.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  shoppingList: ShoppingListModel[] = [];

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.shoppingList = this.shoppingListService.getShoppingList();
    this.shoppingListService.newShopListDisplay.subscribe(
      (shopIng: ShoppingListModel[]) => {
        this.shoppingList = shopIng;
      }
    );
  }

}
