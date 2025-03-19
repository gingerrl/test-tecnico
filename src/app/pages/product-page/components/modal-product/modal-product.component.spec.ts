import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalProductComponent } from './modal-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListInvoiceService } from '../../../../services/list-invoice.service';
import { NgEventBus } from 'ng-event-bus';

describe('ModalProductComponent', () => {
  let component: ModalProductComponent;
  let fixture: ComponentFixture<ModalProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalProductComponent],
      imports: [ReactiveFormsModule, FormsModule, HttpClientModule],
      providers: [ListInvoiceService, NgEventBus],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
