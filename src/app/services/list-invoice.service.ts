import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Endpoints } from '../config/endpoints.enum';
import {
  Customer,
  Invoice,
  Product,
  User,
} from '../interface/data-list.interface';

@Injectable({
  providedIn: 'root',
})
export class ListInvoiceService {
  constructor(private http: HttpClient) {}

  getListsInvoice(): Observable<Invoice[]> {
    return this.http
      .get<Invoice[]>(`${Endpoints.URL}/invoice`)
      .pipe(catchError(() => of([])));
  }

  getListsProduct(): Observable<Product[]> {
    return this.http
      .get<Product[]>(`${Endpoints.URL}/product`)
      .pipe(catchError(() => of([])));
  }

  getListCustomer(): Observable<Customer[]> {
    return this.http
      .get<Customer[]>(`${Endpoints.URL}/customer`)
      .pipe(catchError(() => of([])));
  }

  getListUser(): Observable<User[]> {
    return this.http
      .get<User[]>(`${Endpoints.URL}/user`)
      .pipe(catchError(() => of([])));
  }

  addProduct(body: Product) {
    return this.http
      .post(`${Endpoints.URL}/product`, body, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .pipe(catchError(() => of([])));
  }

  updateProduct(body: Product) {
    return this.http
      .put(`${Endpoints.URL}/product/${body.id}`, body)
      .pipe(catchError(() => of([])));
  }

  addCustomer(body: Customer) {
    return this.http
      .post(`${Endpoints.URL}/customer`, body, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .pipe(catchError(() => of([])));
  }

  updateCustomer(id: string, body: Customer) {
    return this.http
      .put(`${Endpoints.URL}/customer/${id}`, body)
      .pipe(catchError(() => of([])));
  }

  addUser(body: User) {
    return this.http
      .post(`${Endpoints.URL}/user`, body, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .pipe(catchError(() => of([])));
  }

  updateUser(id: string, body: User) {
    return this.http
      .put(`${Endpoints.URL}/user/${id}`, body)
      .pipe(catchError(() => of([])));
  }

  delete(id: string | undefined, name: string) {
    return this.http
      .delete(`${Endpoints.URL}/${name}/${id}`)
      .pipe(catchError(() => of([])));
  }
}
