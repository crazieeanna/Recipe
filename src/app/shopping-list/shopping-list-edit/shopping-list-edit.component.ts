import { Component, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { ShoppingListModel } from '../shopping-list.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {

  @Output() shopListIngredient = new EventEmitter<ShoppingListModel>();
  @ViewChild('nameInput', {static: false}) name!: ElementRef;
  @ViewChild('amountInput', {static: false}) amount!: ElementRef;

  onAddShoppingIng() {
    const name = this.name.nativeElement.value;
    const amt = this.amount.nativeElement.value;
    const shoppingIngredient = new ShoppingListModel(name, amt);
    this.shopListIngredient.emit(shoppingIngredient);
  }

}
