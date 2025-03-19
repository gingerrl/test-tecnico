import { TestBed } from '@angular/core/testing';

import { ListInvoiceService } from './list-invoice.service';

describe('ListInvoiceService', () => {
  let service: ListInvoiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListInvoiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
