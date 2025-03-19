import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableListProductComponent } from './table-list-product.component';

describe('TableListProductComponent', () => {
  let component: TableListProductComponent;
  let fixture: ComponentFixture<TableListProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableListProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableListProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
