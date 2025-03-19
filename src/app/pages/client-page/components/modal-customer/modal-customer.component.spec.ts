import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCustomerComponent } from './modal-customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListInvoiceService } from '../../../../services/list-invoice.service';
import { NgEventBus } from 'ng-event-bus';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ModalCustomerComponent', () => {
  let component: ModalCustomerComponent;
  let fixture: ComponentFixture<ModalCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalCustomerComponent],
      imports: [ReactiveFormsModule, FormsModule, HttpClientModule],
      providers: [ListInvoiceService, NgEventBus],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
