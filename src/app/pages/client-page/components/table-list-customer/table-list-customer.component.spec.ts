import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableListCustomerComponent } from './table-list-customer.component';

describe('TableListCustomerComponent', () => {
  let component: TableListCustomerComponent;
  let fixture: ComponentFixture<TableListCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableListCustomerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableListCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
