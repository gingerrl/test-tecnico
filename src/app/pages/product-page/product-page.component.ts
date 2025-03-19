import { Component, OnInit } from '@angular/core';
import { ListInvoiceService } from '../../services/list-invoice.service';
import { Product } from '../../interface/data-list.interface';
import { NgEventBus } from 'ng-event-bus';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css',
})
export class ProductPageComponent implements OnInit {
  dataProduct: Product[] = [];
  dataFilterProd: Product[] = [];
  showAddProduct = false;
  constructor(
    private productService: ListInvoiceService,
    private eventBus: NgEventBus
  ) {}

  ngOnInit(): void {
    this.eventBus.on('listNew').subscribe(() => {
      this.onListProduct();
    });
    this.eventBus.on('update').subscribe(() => {
      this.onListProduct();
    });
    this.onListProduct();
  }
  onListProduct() {
    this.productService.getListsProduct().subscribe((data) => {
      this.dataProduct = data;
      this.dataFilterProd = data;
    });
  }

  onSearchProduct(e: any): void {
    if (e.target.value.trim() === '') {
      this.dataFilterProd = this.dataProduct;
    } else {
      this.dataFilterProd = this.dataProduct.filter(
        (x) =>
          x.nameProduct.toLowerCase().includes(e.target.value.toLowerCase()) ||
          x.code.includes(e.target.value)
      );
    }
  }

  onModalAdd() {
    this.showAddProduct = true;
  }
  onModalClose() {
    this.showAddProduct = false;
  }
}
