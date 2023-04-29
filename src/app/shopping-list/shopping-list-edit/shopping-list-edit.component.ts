import { Component, ElementRef, ViewChild, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { ShoppingListModel } from '../shopping-list.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {

  @ViewChild('shopForm', {static: false}) shopFormEditItemLoad!: NgForm;

  shopListItemID!: number;
  shopListItemEditMode = false;
  shopListItemEditLoad!: ShoppingListModel;
  subscription!: Subscription;
  
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.subscription = this.shoppingListService.loadShopListItemID.subscribe(
      (shopItemIndex: number) => {
        this.shopListItemID = shopItemIndex;
        this.shopListItemEditMode = true;
        this.shopListItemEditLoad = this.shoppingListService.getShopListByID(this.shopListItemID);
        this.shopFormEditItemLoad.form.setValue({
          name: this.shopListItemEditLoad.name,
          amount: this.shopListItemEditLoad.amount
        })
      }
    );
  }

  onAddShoppingIng(shoppingForm: NgForm) {
    const shoppingFormValue = shoppingForm.value;
    const shoppingListIngredient = new ShoppingListModel(shoppingFormValue.name, shoppingFormValue.amount);
    if(this.shopListItemEditMode === true) {
      this.shoppingListService.updateShopList(this.shopListItemID, shoppingListIngredient);
    } else {
      this.shoppingListService.onDisplayShopListIng(shoppingListIngredient);
    }
    this.shopListItemEditMode = false;
    this.shopFormEditItemLoad.reset();
  }

  onClear() {
    this.shopListItemEditMode = false;
    this.shopFormEditItemLoad.reset();
  }
  onDelete() {
    this.shopListItemEditMode = false;
    this.shoppingListService.deleteShopListItem(this.shopListItemID);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
