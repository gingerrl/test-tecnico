export interface Invoice {
  id?:string,
  num: string;
  date: string;
  customer: string;
  seller: string;
  status: string;
  total: string;
}

export interface Product {
  id?: string | undefined;
  code: string;
  nameProduct: string;
  status: string;
  price: string;

}

export interface Customer {
  id?: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  status: string

}


export interface User {
  id: string;
  firstName:string;
  lastName: string;
  fullName: string;
  user: string;
  email: string

}