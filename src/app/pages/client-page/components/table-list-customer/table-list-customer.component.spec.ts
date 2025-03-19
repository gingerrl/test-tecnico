import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableListCustomerComponent } from './table-list-customer.component';
import { NgEventBus } from 'ng-event-bus';

describe('TableListCustomerComponent', () => {
  let component: TableListCustomerComponent;
  let fixture: ComponentFixture<TableListCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableListCustomerComponent],
      providers:[NgEventBus]
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
