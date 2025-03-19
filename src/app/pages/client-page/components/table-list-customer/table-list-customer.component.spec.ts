import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgEventBus } from 'ng-event-bus';
import { TableListCustomerComponent } from './table-list-customer.component';

describe('TableListCustomerComponent', () => {
  let component: TableListCustomerComponent;
  let fixture: ComponentFixture<TableListCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableListCustomerComponent],
      providers: [NgEventBus],
    }).compileComponents();

    fixture = TestBed.createComponent(TableListCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should onButtonDelete', () => {
    const item = {
      id: '1',
      name: 'Jerusalema',
      phone: '0963210111',
      email: 'poblado@gmail.com',
      address: 'urdesa central',
      status: 'Inactivo',
    };
    component.onButtonDelete(item);
    expect(component.itemClientDel).toBe(item);
    expect(component.showModalDelete).toBeTruthy();
  });

  it('should onModalClose', () => {
    component.onModalClose();
    expect(component.showModalDelete).toBeFalsy();
  });

  it('should onButtonConfirm', () => {
    component.onButtonConfirm();
    expect(component.showModalDelete).toBeFalsy();
  });
});
