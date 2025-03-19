import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgEventBus } from 'ng-event-bus';
import { Product } from '../../../../interface/data-list.interface';

@Component({
  selector: 'app-table-list-product',
  templateUrl: './table-list-product.component.html',
  styleUrl: './table-list-product.component.css',
})
export class TableListProductComponent {
  @Input() listProduct: Product[] = [];
  @Output() eventListProd = new EventEmitter();

  showUpdateProduct = false;
  showModalDelete = false
  itemProductDel :  Product = {
    code: '',
    nameProduct: '',
    status: '',
    price: '',
  }
  constructor(private readonly eventBus: NgEventBus) {}

  onButtonEdit(item: Product) {
    setTimeout(() => {
      this.eventBus.cast('edit', item);
    }, 300);
    this.showUpdateProduct = true;
  }

  onModalClose() {
    this.showUpdateProduct = false;
  }

  onButtonDelete(item: Product) {
    this.itemProductDel = item;
    this.showModalDelete= true
  }

  onCloseModalDele(){
    this.showModalDelete = false;
  }
  onButtonConfirm(){
    this.showModalDelete = false;
    this.eventListProd.emit()
  }
}
