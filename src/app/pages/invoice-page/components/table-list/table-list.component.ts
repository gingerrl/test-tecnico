import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Invoice, Product } from '../../../../interface/data-list.interface';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrl: './table-list.component.css',
})
export class TableListComponent {
  @Input() listInvoice: Invoice[] = [];
  @Input() listProduct: Product[] = [];
  @Output() eventListProd = new EventEmitter();

  showModalDelete = false
  itemInvoiceDel :  Invoice = {
    num: '',
    date: '',
    customer: '',
    seller: '',
    status: '',
    total: '',
  }

  onButtonDelete(item: Invoice) {
    this.itemInvoiceDel = item;
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
