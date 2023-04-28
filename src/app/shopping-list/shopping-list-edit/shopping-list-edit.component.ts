import { Component, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { ShoppingListModel } from '../shopping-list.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {
  
  @ViewChild('nameInput', {static: false}) name!: ElementRef;
  @ViewChild('amountInput', {static: false}) amount!: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}

  onAddShoppingIng() {
    const name = this.name.nativeElement.value;
    const amt = this.amount.nativeElement.value;
    const shoppingIngredient = new ShoppingListModel(name, amt);
    this.shoppingListService.onDisplayShopListIng(shoppingIngredient);
  }

}
