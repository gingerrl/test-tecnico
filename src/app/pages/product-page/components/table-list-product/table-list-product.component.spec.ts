import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgEventBus } from 'ng-event-bus';
import { TableListProductComponent } from './table-list-product.component';

describe('TableListProductComponent', () => {
  let component: TableListProductComponent;
  let fixture: ComponentFixture<TableListProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableListProductComponent],
      imports: [ReactiveFormsModule, FormsModule],
      providers: [NgEventBus],
    }).compileComponents();

    fixture = TestBed.createComponent(TableListProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should onButtonDelete', () => {
    const item = {
      id: '1',
      code: '123',
      nameProduct: 'product1',
      status: 'Activo',
      price: '20.00',
    };
    component.onButtonDelete(item);
    expect(component.itemProductDel).toBe(item);
    expect(component.showModalDelete).toBeTruthy();
  });

  it('should onModalClose', () => {
    component.onModalClose();
    expect(component.showUpdateProduct).toBeFalsy();
  });

  it('should onCloseModalDele', () => {
    component.onCloseModalDele();
    expect(component.showModalDelete).toBeFalsy();
  });

  it('should onButtonConfirm', () => {
    component.onButtonConfirm();
    expect(component.showModalDelete).toBeFalsy();
  });
});
