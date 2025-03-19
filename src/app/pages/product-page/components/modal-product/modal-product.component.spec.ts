import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgEventBus } from 'ng-event-bus';
import { of } from 'rxjs';
import { Product } from '../../../../interface/data-list.interface';
import { ListInvoiceService } from '../../../../services/list-invoice.service';
import { ModalProductComponent } from './modal-product.component';

const dataProduct: Product[] = [
  {
    id: '1',
    code: '123',
    nameProduct: 'product1',
    status: 'Activo',
    price: '20.00',
  },
];

describe('ModalProductComponent', () => {
  let component: ModalProductComponent;
  let fixture: ComponentFixture<ModalProductComponent>;
  let service: ListInvoiceService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalProductComponent],
      imports: [ReactiveFormsModule, FormsModule, HttpClientModule],
      providers: [ListInvoiceService, NgEventBus],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalProductComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(ListInvoiceService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should method onButtonSend updateProduct', async () => {
    jest.spyOn(router, 'navigate').mockImplementation();
    const update = await jest.spyOn(service, 'updateProduct');
    component.isCreate = false;
    component.onButtonSend();
    expect(update).toHaveBeenCalled();
  });

  it('should method onButtonAdd', () => {
    const spy = jest
      .spyOn(service, 'addProduct')
      .mockReturnValueOnce(of(dataProduct));
    component.onButtonAdd();
    expect(spy).toHaveBeenCalled();
  });

  it('should method onListUpdate', () => {
    component.isCreate = false;
    const spy = jest
      .spyOn(service, 'updateProduct')
      .mockReturnValueOnce(of(dataProduct));
    component.onListUpdate();
    expect(spy).toHaveBeenCalled();
  });
});
