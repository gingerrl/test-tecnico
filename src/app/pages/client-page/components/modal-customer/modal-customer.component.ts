import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MetaData, NgEventBus } from 'ng-event-bus';
import { ListInvoiceService } from '../../../../services/list-invoice.service';
import { Customer } from '../../../../interface/data-list.interface';

@Component({
  selector: 'app-modal-customer',
  templateUrl: './modal-customer.component.html',
  styleUrl: './modal-customer.component.css',
})
export class ModalCustomerComponent implements OnInit {
  @Output() closeModal = new EventEmitter();

  isCreate = true;
  form: FormGroup = this.fb.group({
    id: [''],
    name:  [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(100)],
    ],
    phone: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(10)],
    ],
    email: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(100)],
    ],
    address: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(100)],
    ],
    status: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(100)],
    ],
  });
  constructor(
    private fb: FormBuilder,
    private readonly customerService: ListInvoiceService,
    private readonly eventBus: NgEventBus
  ) {}

  ngOnInit(): void {
    this.eventBus.on('customer-edit').subscribe((meta: MetaData) => {
      this.isCreate = false;
      this.onListChanges(meta.data);
    });
  }

  onButtonInit() {
    if (!this.isCreate) return this.onListUpdate();
    this.onListAddCustomer();
  }

  onListAddCustomer() {
    this.customerService.addCustomer(this.form.value).subscribe((data) => {
      console.log('customer', data);
      this.eventBus.cast('customer-add', data);
      this.closeModal.emit()

    });
  }

  onListUpdate() {
    this.customerService.updateCustomer(this.form.controls['id'].value, this.form.value).subscribe((data) => {
      console.log("updatteee",data)
      this.eventBus.cast('customer-update', data);
      this.closeModal.emit()
    });
  }

  onListChanges(item: Customer) {
    this.form.setValue({
      id: item.id,
      name: item.name,
      phone: item.phone,
      email: item.email,
      address: item.address,
      status: item.status,
    });
  }

  onModalClose(){
    this.closeModal.emit()
  }
}
