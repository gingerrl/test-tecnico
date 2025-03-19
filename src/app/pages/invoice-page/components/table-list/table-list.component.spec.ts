import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableListComponent } from './table-list.component';

describe('TableListComponent', () => {
  let component: TableListComponent;
  let fixture: ComponentFixture<TableListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should onCloseModalDele', () => {
    component.onCloseModalDele();
    expect(component.showModalDelete).toBeFalsy();
  });

  it('should onButtonDelete', () => {
    const item = {
      id: '1',
      num: '123',
      date: '19-03-2025',
      customer: 'Luiz Paz',
      seller: 'Ginger Romo',
      status: 'Activo',
      total: '50.00',
    };
    component.onButtonDelete(item);
    expect(component.itemInvoiceDel).toBe(item);
    expect(component.showModalDelete).toBeTruthy();
  });
  it('should onButtonConfirm', () => {
    component.onButtonConfirm();
    expect(component.showModalDelete).toBeFalsy();
  });
});
