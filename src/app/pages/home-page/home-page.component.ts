import { Component, OnInit } from '@angular/core';
import { ListInvoiceService } from '../../services/list-invoice.service';
import { Invoice, Product } from '../../interface/data-list.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {
  listInvoice: Invoice[] =[];
  listProduct: Product[] =[]

  constructor(
    private readonly invoiceService: ListInvoiceService
  ){}

  ngOnInit(): void {
    this.onListInvoice();
    this.onListProduct();
  }

  onListInvoice(){
    this.invoiceService.getListsInvoice().subscribe((data) =>{
      this.listInvoice= data
    })
  }

  onListProduct(){
    this.invoiceService.getListsProduct().subscribe((data) =>{
      this.listProduct= data
    })
  }
}
