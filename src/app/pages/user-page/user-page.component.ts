import { Component, OnInit } from '@angular/core';
import { ListInvoiceService } from '../../services/list-invoice.service';
import { User } from '../../interface/data-list.interface';
import { NgEventBus } from 'ng-event-bus';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css',
})
export class UserPageComponent implements OnInit {
  dataUser: User[] = [];
  dataFilterUser: User[] = [];
  showAddUser = false;
  constructor(
    private userService: ListInvoiceService,
    private readonly eventBus: NgEventBus
  ) {}

  ngOnInit(): void {
    this.eventBus.on('list-user').subscribe((data) => {
      this.onListUser();
    });
    this.eventBus.on('update-user').subscribe(() => {
      this.onListUser();
    });
    this.onListUser();
  }
  onListUser() {
    this.userService.getListUser().subscribe((data) => {
      this.dataUser = data;
      this.dataFilterUser = data;
    });
  }

  onSearchUser(e: any): void {
    if (e.target.value.trim() === '') {
      this.dataFilterUser = this.dataUser;
    } else {
      this.dataFilterUser = this.dataUser.filter(
        (x) =>
          x.fullName.toLowerCase().includes(e.target.value.toLowerCase())
      );
    }
  }
  onModalAdd() {
    this.showAddUser = true;
  }
  onModalClose() {
    this.showAddUser = false;
  }
}
