import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableListUserComponent } from './table-list-user.component';
import { NgEventBus } from 'ng-event-bus';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('TableListUserComponent', () => {
  let component: TableListUserComponent;
  let fixture: ComponentFixture<TableListUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableListUserComponent],
      imports: [ReactiveFormsModule, FormsModule, HttpClientModule],
      providers: [NgEventBus],
    }).compileComponents();

    fixture = TestBed.createComponent(TableListUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
