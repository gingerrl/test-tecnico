import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgEventBus } from 'ng-event-bus';
import { of } from 'rxjs';
import { Customer } from '../../../../interface/data-list.interface';
import { ListInvoiceService } from '../../../../services/list-invoice.service';
import { ModalCustomerComponent } from './modal-customer.component';

const dataCustomer: Customer[] = [
  {
    id: '1',
    name: 'Jerusalema',
    phone: '0963210111',
    email: 'poblado@gmail.com',
    address: 'urdesa central',
    status: 'Inactivo',
  },
];

describe('ModalCustomerComponent', () => {
  let component: ModalCustomerComponent;
  let fixture: ComponentFixture<ModalCustomerComponent>;
  let service: ListInvoiceService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalCustomerComponent],
      imports: [ReactiveFormsModule, FormsModule, HttpClientModule],
      providers: [ListInvoiceService, NgEventBus],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalCustomerComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(ListInvoiceService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should method onButtonInit updateCustomer', async () => {
    jest.spyOn(router, 'navigate').mockImplementation();
    const update = await jest.spyOn(service, 'updateCustomer');
    component.isCreate = false;
    component.onButtonInit();
    expect(update).toHaveBeenCalled();
  });

  it('should method onListAddCustomer', () => {
    const spy = jest
      .spyOn(service, 'addCustomer')
      .mockReturnValueOnce(of(dataCustomer));
    component.onListAddCustomer();
    expect(spy).toHaveBeenCalled();
  });

  it('should method onListUpdate', () => {
    const spy = jest
      .spyOn(service, 'updateCustomer')
      .mockReturnValueOnce(of(dataCustomer));
    component.onListUpdate();
    expect(spy).toHaveBeenCalled();
  });
});
