import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgEventBus } from 'ng-event-bus';
import { of } from 'rxjs';
import { User } from '../../interface/data-list.interface';
import { ListInvoiceService } from '../../services/list-invoice.service';
import { UserPageComponent } from './user-page.component';

const dataUser: User[] = [
  {
    id: '1',
    firstName: 'ginger',
    lastName: 'romo',
    fullName: 'ginger romo',
    user: 'gromo',
    email: 'gromo@gmail.com',
  },
];

describe('UserPageComponent', () => {
  let component: UserPageComponent;
  let fixture: ComponentFixture<UserPageComponent>;
  let service: ListInvoiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserPageComponent],
      imports: [ReactiveFormsModule, FormsModule, HttpClientModule],
      providers: [ListInvoiceService, NgEventBus],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(UserPageComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(ListInvoiceService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should method onListUser', () => {
    const list = jest
      .spyOn(service, 'getListUser')
      .mockReturnValueOnce(of(dataUser));
    component.dataUser = dataUser;
    component.dataFilterUser = dataUser;
    component.onListUser();
    expect(list).toHaveBeenCalled();
  });

  it('method onSearchUser', () => {
    const event = {
      target: {
        value: '',
      },
    };
    component.onSearchUser(event);
    expect(component.dataFilterUser).toEqual(component.dataUser);
  });

  it('method onSearchUser', () => {
    const event = {
      target: {
        value: 'ginger',
      },
    };
    component.dataUser = dataUser;
    component.onSearchUser(event);
    expect(component.dataFilterUser.length).toBe(1);
  });
});
