import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgEventBus } from 'ng-event-bus';
import { User } from '../../../../interface/data-list.interface';

@Component({
  selector: 'app-table-list-user',
  templateUrl: './table-list-user.component.html',
  styleUrl: './table-list-user.component.css',
})
export class TableListUserComponent {
  @Input() listUser: User[] = [];

  @Output() eventListProd = new EventEmitter();

  showModalDelete = false;
  showUpdateUser = false;

  itemUserDel: User = {
    id: '',
    firstName: '',
    lastName: '',
    fullName: '',
    user: '',
    email: '',
  };

  constructor(private readonly eventBus: NgEventBus) {}
  onButtonEdit(item: User) {
    setTimeout(() => {
      this.eventBus.cast('edit-user', item);
    }, 300);
    this.showUpdateUser = true;
  }

  onButtonDelete(item: User) {
    this.itemUserDel = item;
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
