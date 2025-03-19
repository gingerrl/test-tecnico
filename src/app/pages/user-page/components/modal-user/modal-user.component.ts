import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MetaData, NgEventBus } from 'ng-event-bus';
import { ListInvoiceService } from '../../../../services/list-invoice.service';
import { User } from '../../../../interface/data-list.interface';

@Component({
  selector: 'app-modal-user',
  templateUrl: './modal-user.component.html',
  styleUrl: './modal-user.component.css',
})
export class ModalUserComponent implements OnInit {
  @Output() closeModal = new EventEmitter();

  isCreate = true;
  form: FormGroup = this.fb.group({
    id: [''],
    firstName: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(100)],
    ],
    lastName: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(100)],
    ],
    fullName: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(100)],
    ],
    user: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(100)],
    ],
    email: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(100)],
    ],
  });

  constructor(
    private userService: ListInvoiceService,
    private fb: FormBuilder,
    private readonly eventBus: NgEventBus
  ) {}

  ngOnInit(): void {
    this.eventBus.on('edit-user').subscribe((meta: MetaData) => {
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
      id: Math.random().toString(8).slice(2, 5),
    });
    const fullName =
      this.form.controls['firstName'].value +
      ' ' +
      this.form.controls['lastName'].value;

    this.userService
      .addUser({ ...this.form.value, fullName })
      .subscribe((data) => {
        this.eventBus.cast('list-user', data);
        this.closeModal.emit();
      });
  }

  onListUpdate() {
    this.userService
      .updateUser(this.form.controls['id'].value, this.form.value)
      .subscribe((data) => {
        this.eventBus.cast('update-user', data);
        this.closeModal.emit();
      });
  }

  onListChanges(item: User) {
    console.log(item);
    this.form.setValue({
      id: item.id,
      firstName: item.firstName,
      lastName: item.lastName,
      fullName: item.firstName + ' ' + item.lastName,
      user: item.user,
      email: item.email,
    });
  }

  onModalClose() {
    this.closeModal.emit();
  }
}
