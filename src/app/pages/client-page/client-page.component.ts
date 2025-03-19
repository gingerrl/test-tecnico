import { Component, OnInit } from '@angular/core';
import { Customer } from '../../interface/data-list.interface';
import { ListInvoiceService } from '../../services/list-invoice.service';
import { NgEventBus } from 'ng-event-bus';

@Component({
  selector: 'app-client-page',
  templateUrl: './client-page.component.html',
  styleUrl: './client-page.component.css',
})
export class ClientPageComponent implements OnInit {
  dataCustomer: Customer[] = [];
  dataFilterCust: Customer[] = [];
  showModalCustomer = false;

  constructor(
    private customerService: ListInvoiceService,
    private readonly eventBus: NgEventBus
  ) {}

  ngOnInit(): void {
    this.eventBus.on('customer-add').subscribe(() => {
      this.onListCustomer();
    });
    this.eventBus.on('customer-update').subscribe(() => {
      this.onListCustomer();
    });
    this.onListCustomer();
  }
  onListCustomer() {
    this.customerService.getListCustomer().subscribe((data) => {
      this.dataCustomer = data;
      this.dataFilterCust = data;
    });
  }

  onSearchCustomer(e: any): void {
    if (e.target.value.trim() === '') {
      this.dataFilterCust = this.dataCustomer;
    } else {
      this.dataFilterCust = this.dataCustomer.filter((x) =>
        x.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
    }
  }

  onAddCustomer() {
    this.showModalCustomer = true;
  }

  onModalClose() {
    this.showModalCustomer = false;
  }
}
