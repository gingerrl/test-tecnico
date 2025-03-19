import { TestBed } from '@angular/core/testing';

import {
  HttpClientTestingModule,
  HttpTestingController,
  TestRequest,
} from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Endpoints } from '../config/endpoints.enum';
import {
  Customer,
  Invoice,
  Product,
  User,
} from '../interface/data-list.interface';
import { ListInvoiceService } from './list-invoice.service';

const dataInvoice: Invoice[] = [
  {
    id: '',
    num: '',
    date: '',
    customer: '',
    seller: '',
    status: '',
    total: '',
  },
];

const dataProduct: Product[] = [
  {
    id: '',
    code: '',
    nameProduct: '',
    status: '',
    price: '',
  },
];

const dataCustomer: Customer[] = [
  {
    id: '',
    name: '',
    phone: '',
    email: '',
    address: '',
    status: '',
  },
];

const dataUser: User[] = [
  {
    id: '',
    firstName: '',
    lastName: '',
    fullName: '',
    user: '',
    email: '',
  },
];
describe('ListInvoiceService', () => {
  let service: ListInvoiceService;
  let router: Router;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [ListInvoiceService],
    });
  });

  beforeEach(() => {
    service = TestBed.inject(ListInvoiceService);
    router = TestBed.inject(Router);
    httpMock = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('method getListsInvoice', () => {
    service.getListsInvoice().subscribe((response) => {
      expect(response).toBe(dataInvoice);
    });
    const request: TestRequest = httpMock.expectOne(`${Endpoints.URL}/invoice`);
    expect(request.request.method).toBe('GET');
    request.flush(dataInvoice);
  });

  it('should return an empty list when the request fails', () => {
    service.getListsInvoice().subscribe((invoices) => {
      expect(invoices).toEqual([]);
    });

    const req = httpMock.expectOne(`${Endpoints.URL}/invoice`);
    expect(req.request.method).toBe('GET');
    req.error(new ErrorEvent('Network error'));
  });

  it('method getListsProduct', () => {
    service.getListsProduct().subscribe((response) => {
      expect(response).toBe(dataProduct);
    });
    const request: TestRequest = httpMock.expectOne(`${Endpoints.URL}/product`);
    expect(request.request.method).toBe('GET');
    request.flush(dataProduct);
  });

  it('should return an empty list when the request fails', () => {
    service.getListsProduct().subscribe((product) => {
      expect(product).toEqual([]);
    });

    const req = httpMock.expectOne(`${Endpoints.URL}/product`);
    expect(req.request.method).toBe('GET');
    req.error(new ErrorEvent('Network error'));
  });

  it('method getListCustomer', () => {
    service.getListCustomer().subscribe((response) => {
      expect(response).toBe(dataCustomer);
    });
    const request: TestRequest = httpMock.expectOne(
      `${Endpoints.URL}/customer`
    );
    expect(request.request.method).toBe('GET');
    request.flush(dataCustomer);
  });

  it('should return an empty list when the request fails', () => {
    service.getListCustomer().subscribe((customer) => {
      expect(customer).toEqual([]);
    });

    const req = httpMock.expectOne(`${Endpoints.URL}/customer`);
    expect(req.request.method).toBe('GET');
    req.error(new ErrorEvent('Network error'));
  });

  it('method getListUser', () => {
    service.getListUser().subscribe((response) => {
      expect(response).toBe(dataUser);
    });
    const request: TestRequest = httpMock.expectOne(`${Endpoints.URL}/user`);
    expect(request.request.method).toBe('GET');
    request.flush(dataUser);
  });

  it('should return an empty list when the request fails', () => {
    service.getListUser().subscribe((user) => {
      expect(user).toEqual([]);
    });

    const req = httpMock.expectOne(`${Endpoints.URL}/user`);
    expect(req.request.method).toBe('GET');
    req.error(new ErrorEvent('Network error'));
  });

  it('method addProduct', () => {
    const product = {
      id: '1',
      code: '1233',
      nameProduct: 'product1',
      status: 'Activo',
      price: '20',
    };
    service.addProduct(product).subscribe((response) => {
      expect(response).toBe(product);
    });
    const request: TestRequest = httpMock.expectOne(`${Endpoints.URL}/product`);
    expect(request.request.method).toBe('POST');
    expect(request.request.body).toEqual(product);
    request.flush([]);
  });

  it('should error addProduct', () => {
    const product = {
      id: '1',
      code: '1233',
      nameProduct: 'product1',
      status: 'Activo',
      price: '20',
    };
    service.addProduct(product).subscribe((response) => {
      expect(response).toEqual([]);
    });

    const req = httpMock.expectOne(`${Endpoints.URL}/product`);
    expect(req.request.method).toBe('POST');
    req.error(new ErrorEvent('Network error'));
  });

  it('method updateProduct', () => {
    const updateProduct = {
      id: '1',
      code: '1233',
      nameProduct: 'product1',
      status: 'Activo',
      price: '20',
    };
    service.updateProduct(updateProduct).subscribe((response) => {
      expect(response).toEqual([]);
    });
    const request: TestRequest = httpMock.expectOne(
      `${Endpoints.URL}/product/${updateProduct.id}`
    );
    expect(request.request.method).toBe('PUT');
    expect(request.request.body).toEqual(updateProduct);
    request.flush([]);
  });

  it('should error updateProduct', () => {
    const updateProduct = {
      id: '1',
      code: '1233',
      nameProduct: 'product1',
      status: 'Activo',
      price: '20',
    };
    service.updateProduct(updateProduct).subscribe((response) => {
      expect(response).toEqual([]);
    });

    const req = httpMock.expectOne(
      `${Endpoints.URL}/product/${updateProduct.id}`
    );
    expect(req.request.method).toBe('PUT');
    req.error(new ErrorEvent('Network error'));
  });

  it('method addCustomer', () => {
    const customer = {
      id: '',
      name: '',
      phone: '',
      email: '',
      address: '',
      status: '',
    };
    service.addCustomer(customer).subscribe((response) => {
      expect(response).toBe(customer);
    });
    const request: TestRequest = httpMock.expectOne(
      `${Endpoints.URL}/customer`
    );
    expect(request.request.method).toBe('POST');
    expect(request.request.body).toEqual(customer);
    request.flush([]);
  });

  it('should error addCustomer', () => {
    const customer = {
      id: '',
      name: '',
      phone: '',
      email: '',
      address: '',
      status: '',
    };
    service.addCustomer(customer).subscribe((response) => {
      expect(response).toEqual([]);
    });

    const req = httpMock.expectOne(`${Endpoints.URL}/customer`);
    expect(req.request.method).toBe('POST');
    req.error(new ErrorEvent('Network error'));
  });

  it('method updateCustomer', () => {
    const updateCustomer = {
      id: '',
      name: '',
      phone: '',
      email: '',
      address: '',
      status: '',
    };
    service
      .updateCustomer(updateCustomer.id, updateCustomer)
      .subscribe((response) => {
        expect(response).toEqual([]);
      });
    const request: TestRequest = httpMock.expectOne(
      `${Endpoints.URL}/customer/${updateCustomer.id}`
    );
    expect(request.request.method).toBe('PUT');
    expect(request.request.body).toEqual(updateCustomer);
    request.flush([]);
  });

  it('should error updateCustomer', () => {
    const updateCustomer = {
      id: '',
      name: '',
      phone: '',
      email: '',
      address: '',
      status: '',
    };
    service
      .updateCustomer(updateCustomer.id, updateCustomer)
      .subscribe((response) => {
        expect(response).toEqual([]);
      });

    const req = httpMock.expectOne(
      `${Endpoints.URL}/customer/${updateCustomer.id}`
    );
    expect(req.request.method).toBe('PUT');
    req.error(new ErrorEvent('Network error'));
  });

  it('method addUser', () => {
    const user = {
      id: '',
      firstName: '',
      lastName: '',
      fullName: '',
      user: '',
      email: '',
    };
    service.addUser(user).subscribe((response) => {
      expect(response).toBe(user);
    });
    const request: TestRequest = httpMock.expectOne(`${Endpoints.URL}/user`);
    expect(request.request.method).toBe('POST');
    expect(request.request.body).toEqual(user);
    request.flush([]);
  });

  it('should error addUser', () => {
    const user = {
      id: '',
      firstName: '',
      lastName: '',
      fullName: '',
      user: '',
      email: '',
    };
    service.addUser(user).subscribe((response) => {
      expect(response).toEqual([]);
    });

    const req = httpMock.expectOne(`${Endpoints.URL}/user`);
    expect(req.request.method).toBe('POST');
    req.error(new ErrorEvent('Network error'));
  });

  it('method updateUser', () => {
    const updateUser = {
      id: '',
      firstName: '',
      lastName: '',
      fullName: '',
      user: '',
      email: '',
    };
    service.updateUser(updateUser.id, updateUser).subscribe((response) => {
      expect(response).toEqual([]);
    });
    const request: TestRequest = httpMock.expectOne(
      `${Endpoints.URL}/user/${updateUser.id}`
    );
    expect(request.request.method).toBe('PUT');
    expect(request.request.body).toEqual(updateUser);
    request.flush([]);
  });

  it('should error updateUser', () => {
    const updateUser = {
      id: '',
      firstName: '',
      lastName: '',
      fullName: '',
      user: '',
      email: '',
    };
    service.updateUser(updateUser.id, updateUser).subscribe((response) => {
      expect(response).toEqual([]);
    });

    const req = httpMock.expectOne(`${Endpoints.URL}/user/${updateUser.id}`);
    expect(req.request.method).toBe('PUT');
    req.error(new ErrorEvent('Network error'));
  });

  it('should delete a product', () => {
    const id = '1';
    const name = 'product';

    service.delete(id, name).subscribe((response) => {
      expect(response).toEqual([]);
    });

    const req = httpMock.expectOne(`${Endpoints.URL}/${name}/${id}`);
    expect(req.request.method).toBe('DELETE');
    req.flush([]);
  });

  it('should handle error delete', () => {
    const id = '1';
    const name = 'product';

    service.delete(id, name).subscribe((response) => {
      expect(response).toEqual([]);
    });
    const req = httpMock.expectOne(`${Endpoints.URL}/${name}/${id}`);
    expect(req.request.method).toBe('DELETE');
    req.error(new ErrorEvent('Network error'));
  });
});
