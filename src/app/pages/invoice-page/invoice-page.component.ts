import { Component, OnInit } from '@angular/core';
import { ListInvoiceService } from '../../services/list-invoice.service';
import { Invoice } from '../../interface/data-list.interface';

@Component({
  selector: 'app-invoice-page',
  templateUrl: './invoice-page.component.html',
  styleUrl: './invoice-page.component.css',
})
export class InvoicePageComponent implements OnInit {
  dataInvoi: Invoice[] = [];
  dataFilterInv: Invoice[] = [];

  constructor(private invoiceService: ListInvoiceService) {}

  ngOnInit(): void {
    console.log("inittt")
    this.onListInvoice();
  }

  onListInvoice() {
    this.invoiceService.getListsInvoice().subscribe((data) => {
      console.log("data",data)
      this.dataInvoi = data;
      this.dataFilterInv = data;
    });
  }

  onSearchInvoice(e: any): void {
    if (e.target.value.trim() === '') {
      this.dataFilterInv = this.dataInvoi;
    } else {
      this.dataFilterInv = this.dataInvoi.filter(
        (x) =>
          x.customer.toLowerCase().includes(e.target.value.toLowerCase()) ||
          x.num.includes(e.target.value)
      );
    }
  }
}
