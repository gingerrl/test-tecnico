import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgEventBus } from 'ng-event-bus';
import { of } from 'rxjs';
import { Product } from '../../interface/data-list.interface';
import { ListInvoiceService } from '../../services/list-invoice.service';
import { ProductPageComponent } from './product-page.component';

const dataProduct: Product[] = [
  {
    id: '1',
    code: '123',
    nameProduct: 'product1',
    status: 'Activo',
    price: '20.00',
  },
];

describe('ProductPageComponent', () => {
  let component: ProductPageComponent;
  let fixture: ComponentFixture<ProductPageComponent>;
  let service: ListInvoiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductPageComponent],
      imports: [ReactiveFormsModule, FormsModule, HttpClientModule],
      providers: [ListInvoiceService, NgEventBus],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductPageComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(ListInvoiceService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should method onListProduct', () => {
    const list = jest
      .spyOn(service, 'getListsProduct')
      .mockReturnValueOnce(of(dataProduct));
    component.dataProduct = dataProduct;
    component.dataFilterProd = dataProduct;
    component.onListProduct();
    expect(list).toHaveBeenCalled();
  });

  it('method onSearchProduct', () => {
    const event = {
      target: {
        value: '',
      },
    };
    component.onSearchProduct(event);
    expect(component.dataFilterProd).toEqual(component.dataProduct);
  });

  it('method onSearchProduct', () => {
    const event = {
      target: {
        value: 'product1',
      },
    };
    component.dataProduct = dataProduct;
    component.onSearchProduct(event);
    expect(component.dataFilterProd.length).toBe(1);
  });
});
