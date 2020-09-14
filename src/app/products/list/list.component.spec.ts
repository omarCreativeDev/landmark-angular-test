import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { ProductsService } from '../services/products.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let service: ProductsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
    service = TestBed.inject(ProductsService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch list of products when component initialises', () => {
    spyOn(service, 'listProducts').and.callThrough();
    component.ngOnInit();
    expect(service.listProducts).toHaveBeenCalled();
  });
});
