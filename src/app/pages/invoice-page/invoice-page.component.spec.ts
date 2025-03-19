import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { Invoice } from '../../interface/data-list.interface';
import { ListInvoiceService } from '../../services/list-invoice.service';
import { InvoicePageComponent } from './invoice-page.component';

const dataInvoice: Invoice[] = [
  {
    id: '1',
    num: '123',
    date: '19-03-2025',
    customer: 'Luiz Paz',
    seller: 'Ginger Romo',
    status: 'Activo',
    total: '50.00',
  },
];

describe('InvoicePageComponent', () => {
  let component: InvoicePageComponent;
  let fixture: ComponentFixture<InvoicePageComponent>;
  let service: ListInvoiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvoicePageComponent],
      imports: [ReactiveFormsModule, FormsModule, HttpClientModule],
      providers: [ListInvoiceService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(InvoicePageComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(ListInvoiceService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should method onListInvoice', () => {
    const list = jest
      .spyOn(service, 'getListsInvoice')
      .mockReturnValueOnce(of(dataInvoice));
    component.dataInvoi = dataInvoice;
    component.dataFilterInv = dataInvoice;
    component.onListInvoice();
    expect(list).toHaveBeenCalled();
  });

  it('method onSearchInvoice', () => {
    const event = {
      target: {
        value: '',
      },
    };
    component.onSearchInvoice(event);
    expect(component.dataFilterInv).toEqual(component.dataInvoi);
  });

  it('method onSearchInvoice', () => {
    const event = {
      target: {
        value: '123',
      },
    };
    component.dataInvoi = dataInvoice;
    component.onSearchInvoice(event);
    expect(component.dataFilterInv.length).toBe(1);
  });
});
