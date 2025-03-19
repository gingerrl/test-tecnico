import { TestBed } from '@angular/core/testing';

import { ListInvoiceService } from './list-invoice.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

describe('ListInvoiceService', () => {
  let service: ListInvoiceService;
  let router: Router

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [ListInvoiceService]
    })
  });


  beforeEach(() => {
    service = TestBed.inject(ListInvoiceService);
    router = TestBed.inject(Router);

  })
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
