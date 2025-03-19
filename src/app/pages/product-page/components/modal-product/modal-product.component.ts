import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MetaData, NgEventBus } from 'ng-event-bus';
import { ListInvoiceService } from '../../../../services/list-invoice.service';
import { Product } from '../../../../interface/data-list.interface';

@Component({
  selector: 'app-modal-product',
  templateUrl: './modal-product.component.html',
  styleUrl: './modal-product.component.css',
})
export class ModalProductComponent implements OnInit {
  @Output() closeModal = new EventEmitter();
  isCreate = true;
  form: FormGroup = this.fb.group({
    id: [''],
    code: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(10)],
    ],
    nameProduct: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(100)],
    ],
    status: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(100)],
    ],
    price: [
      '',
      [Validators.required, Validators.minLength(4), Validators.maxLength(100)],
    ],
  });

  constructor(
    private productService: ListInvoiceService,
    private fb: FormBuilder,
    private readonly eventBus: NgEventBus
  ) {}

  ngOnInit(): void {
    this.eventBus.on('edit').subscribe((meta: MetaData) => {
      this.isCreate = false;
      this.onListChanges(meta.data);
    });
  }

  onButtonSend() {
    if (!this.isCreate) return this.onListUpdate();
    this.onButtonAdd();
  }

  onButtonAdd() {
    this.form.patchValue({
      id: Math.random().toString(16).slice(2),
    });
    this.productService.addProduct(this.form.value).subscribe((data) => {
      this.eventBus.cast('listNew', data);
      this.closeModal.emit();
    });
  }

  onListUpdate() {
    this.productService.updateProduct(this.form.value).subscribe((data) => {
      this.eventBus.cast('update', data);
      this.closeModal.emit();

    });
  }

  onListChanges(item: Product) {
    console.log(item);
    this.form.setValue({
      id: item.id,
      code: item.code,
      nameProduct: item.nameProduct,
      status: item.status,
      price: item.price,
    });
  }

  onModalClose() {
    this.closeModal.emit();
  }
}
