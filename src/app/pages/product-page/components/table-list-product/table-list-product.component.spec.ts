import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableListProductComponent } from './table-list-product.component';
import { NgEventBus } from 'ng-event-bus';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
});
