import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  Customer,
  Invoice,
  Product,
  User,
} from '../../interface/data-list.interface';
import { ListInvoiceService } from '../../services/list-invoice.service';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrl: './modal-delete.component.css',
})
export class ModalDeleteComponent {
  @Input() selectItemDel: Product = {
    code: '',
    nameProduct: '',
    status: '',
    price: '',
  };
  @Input() selectClientDel: Customer = {
    name: '',
    phone: '',
    email: '',
    address: '',
    status: '',
  };
  @Input() selectInvoiceDel: Invoice = {
    num: '',
    date: '',
    customer: '',
    seller: '',
    status: '',
    total: '',
  };
  @Input() selectUserDel: User = {
    id: '',
    firstName: '',
    lastName: '',
    fullName: '',
    user: '',
    email: '',
  };
  @Output() buttonConfirm = new EventEmitter();
  @Output() closeModal = new EventEmitter();

  constructor(private readonly deleteService: ListInvoiceService) {}

  onButtonCancel(): void {
    this.closeModal.emit();
  }

  onDeleteItem() {
    if (this.selectItemDel.id) return this.onDeleteProduct();
    if (this.selectClientDel.id) return this.onDeleteClient();
    if (this.selectInvoiceDel.id) return this.onDeleteInvoice();
    if (this.selectUserDel.id) return this.onDeleteUser();
  }

  onDeleteProduct() {
    this.deleteService
      .delete(this.selectItemDel.id, 'product')
      .subscribe(() => {
        this.buttonConfirm.emit();
      });
  }

  onDeleteClient() {
    this.deleteService
      .delete(this.selectClientDel.id, 'customer')
      .subscribe(() => {
        this.buttonConfirm.emit();
      });
  }

  onDeleteInvoice() {
    this.deleteService
      .delete(this.selectInvoiceDel.id, 'invoice')
      .subscribe(() => {
        this.buttonConfirm.emit();
      });
  }

  onDeleteUser() {
    this.deleteService.delete(this.selectUserDel.id, 'user').subscribe(() => {
      this.buttonConfirm.emit();
    });
  }
}
