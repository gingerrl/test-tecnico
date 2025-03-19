import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeleteComponent } from './modal-delete.component';
import { ListInvoiceService } from '../../services/list-invoice.service';
import { CUSTOM_ELEMENTS_SCHEMA, EventEmitter } from '@angular/core';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('ModalDeleteComponent', () => {
  let component: ModalDeleteComponent;
  let fixture: ComponentFixture<ModalDeleteComponent>;
  let httpMock: HttpTestingController;
  let service: ListInvoiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalDeleteComponent],
      imports: [HttpClientTestingModule],
      providers: [ListInvoiceService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalDeleteComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(ListInvoiceService);
    httpMock = TestBed.inject(HttpTestingController);
    component.buttonConfirm = new EventEmitter();

    fixture.detectChanges();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call delete and emit buttonConfirm when onDeleteProduct is successful', () => {
    jest.spyOn(component.buttonConfirm, 'emit');
    const spy = jest
      .spyOn(service, 'delete')
      .mockReturnValueOnce(of('Product successfully removed'));
    component.onDeleteProduct();

    expect(component.buttonConfirm.emit).toHaveBeenCalled();
    expect(spy).toHaveBeenCalled();
  });

  it('should call delete and emit buttonConfirm when onDeleteClient is successful', () => {
    jest.spyOn(component.buttonConfirm, 'emit');
    const spy = jest
      .spyOn(service, 'delete')
      .mockReturnValueOnce(of('Product successfully removed'));
    component.onDeleteClient();

    expect(component.buttonConfirm.emit).toHaveBeenCalled();
    expect(spy).toHaveBeenCalled();
  });

  it('should call delete and emit buttonConfirm when onDeleteInvoice is successful', () => {
    jest.spyOn(component.buttonConfirm, 'emit');
    const spy = jest
      .spyOn(service, 'delete')
      .mockReturnValueOnce(of('Product successfully removed'));
    component.onDeleteInvoice();

    expect(component.buttonConfirm.emit).toHaveBeenCalled();
    expect(spy).toHaveBeenCalled();
  });

  it('should call delete and emit buttonConfirm when onDeleteUser is successful', () => {
    jest.spyOn(component.buttonConfirm, 'emit');
    const spy = jest
      .spyOn(service, 'delete')
      .mockReturnValueOnce(of('Product successfully removed'));
    component.onDeleteUser();

    expect(component.buttonConfirm.emit).toHaveBeenCalled();
    expect(spy).toHaveBeenCalled();
  });

  it('should emit closeModal event when onButtonCancel is called', () => {
    jest.spyOn(component.closeModal, 'emit');
    component.onButtonCancel();
    expect(component.closeModal.emit).toHaveBeenCalled();
  });
});
