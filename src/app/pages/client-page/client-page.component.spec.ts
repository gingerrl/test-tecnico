import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientPageComponent } from './client-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListInvoiceService } from '../../services/list-invoice.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgEventBus } from 'ng-event-bus';
import { Customer } from '../../interface/data-list.interface';
import { of } from 'rxjs';

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

describe('ClientPageComponent', () => {
  let component: ClientPageComponent;
  let fixture: ComponentFixture<ClientPageComponent>;
  let service: ListInvoiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, HttpClientModule],
      providers: [ListInvoiceService, NgEventBus],
      declarations: [ClientPageComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(ClientPageComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(ListInvoiceService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should method onListCustomer', () => {
    const list = jest
      .spyOn(service, 'getListCustomer')
      .mockReturnValueOnce(of(dataCustomer));
    component.dataCustomer = dataCustomer;
    component.dataFilterCust = dataCustomer;
    component.onListCustomer();
    expect(list).toHaveBeenCalled();
  });

  it('method onSearchCustomer', () => {
    const event = {
      target: {
        value: '',
      },
    };
    component.onSearchCustomer(event);
    expect(component.dataFilterCust).toEqual(component.dataCustomer);
  });

  it('method onSearchCustomer', () => {
    const event = {
      target: {
        value: 'Jerusalema',
      },
    };
    component.dataCustomer = dataCustomer;
    component.onSearchCustomer(event);
    expect(component.dataFilterCust.length).toBe(1);
  });
});
