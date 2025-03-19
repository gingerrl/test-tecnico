import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgEventBus } from 'ng-event-bus';
import { TableListUserComponent } from './table-list-user.component';

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

  it('should onModalClose', () => {
    component.onModalClose();
    expect(component.showUpdateUser).toBeFalsy();
  });

  it('should onButtonDelete', () => {
    const item = {
      id: '1',
      firstName: 'ginger',
      lastName: 'romo',
      fullName: 'ginger romo',
      user: 'gromo',
      email: 'gromo@gmail.com',
    };
    component.onButtonDelete(item);
    expect(component.itemUserDel).toBe(item);
    expect(component.showModalDelete).toBeTruthy();
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
