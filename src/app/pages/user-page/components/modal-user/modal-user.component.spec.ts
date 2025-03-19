import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgEventBus } from 'ng-event-bus';
import { of } from 'rxjs';
import { User } from '../../../../interface/data-list.interface';
import { ListInvoiceService } from '../../../../services/list-invoice.service';
import { ModalUserComponent } from './modal-user.component';

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
describe('ModalUserComponent', () => {
  let component: ModalUserComponent;
  let fixture: ComponentFixture<ModalUserComponent>;
  let service: ListInvoiceService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalUserComponent],
      imports: [ReactiveFormsModule, FormsModule, HttpClientModule],
      providers: [ListInvoiceService, NgEventBus],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalUserComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(ListInvoiceService);
    router = TestBed.inject(Router);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should method onButtonSend updateUser', async () => {
    jest.spyOn(router, 'navigate').mockImplementation();
    const update = await jest.spyOn(service, 'updateUser');
    component.isCreate = false;
    component.onButtonSend();
    expect(update).toHaveBeenCalled();
  });

  it('should method onButtonAdd', () => {
    const spy = jest
      .spyOn(service, 'addUser')
      .mockReturnValueOnce(of(dataUser));
    component.onButtonAdd();
    expect(spy).toHaveBeenCalled();
  });

  it('should method onListUpdate', () => {
    component.isCreate = false;
    const spy = jest
      .spyOn(service, 'updateUser')
      .mockReturnValueOnce(of(dataUser));
    component.onListUpdate();
    expect(spy).toHaveBeenCalled();
  });
});
