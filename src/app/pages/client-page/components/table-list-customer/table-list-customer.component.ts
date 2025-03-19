import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgEventBus } from 'ng-event-bus';
import { Customer } from '../../../../interface/data-list.interface';

@Component({
  selector: 'app-table-list-customer',
  templateUrl: './table-list-customer.component.html',
  styleUrl: './table-list-customer.component.css',
})
export class TableListCustomerComponent {
  @Input() listCustomer: Customer[] = [];
  @Output() eventListProd = new EventEmitter();

  showModalCustomer = false;
  showModalDelete = false;
  itemClientDel: Customer = {
    name: '',
    phone: '',
    email: '',
    address: '',
    status: '',
  };
  constructor(private readonly eventBus: NgEventBus) {}
  onButtonEdit(item: Customer) {
    setTimeout(() => {
      this.eventBus.cast('customer-edit', item);
    }, 300);
    this.showModalCustomer = true;
  }

  onModalClose() {
    this.showModalCustomer = false;
  }

  onButtonDelete(item: Customer) {
    this.itemClientDel = item;
    this.showModalDelete = true;
  }
  onCloseModalDele() {
    this.showModalDelete = false;
  }
  onButtonConfirm() {
    this.showModalDelete = false;
    this.eventListProd.emit();
  }
}
