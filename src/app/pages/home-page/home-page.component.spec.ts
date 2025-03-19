import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { Invoice, Product } from '../../interface/data-list.interface';
import { ListInvoiceService } from '../../services/list-invoice.service';
import { HomePageComponent } from './home-page.component';

const dataInvoice: Invoice[] = [
  {
    id: '1',
    num: '123',
    date: '19-03-2025',
    customer: 'Luiz Paz',
    seller: 'Ginger Romo',
    status: 'Activo',
    total: '50.00',
  },
];

const dataProduct: Product[] = [
  {
    id: '1',
    code: '123',
    nameProduct: 'product1',
    status: 'Activo',
    price: '20.00',
  },
];

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;
  let service: ListInvoiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePageComponent],
      imports: [HttpClientModule],
      providers: [ListInvoiceService],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(ListInvoiceService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should method onListInvoice', () => {
    const list = jest
      .spyOn(service, 'getListsInvoice')
      .mockReturnValueOnce(of(dataInvoice));
    component.listInvoice = dataInvoice;
    component.onListInvoice();
    expect(list).toHaveBeenCalled();
  });

  it('should method onListProduct', () => {
    const list = jest
      .spyOn(service, 'getListsProduct')
      .mockReturnValueOnce(of(dataProduct));
    component.listProduct = dataProduct;
    component.onListProduct();
    expect(list).toHaveBeenCalled();
  });
});
