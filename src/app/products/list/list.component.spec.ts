import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { ProductsService } from '../services/products.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductDetailService } from '../../product-detail/services/product-detail.service';
import { Router } from '@angular/router';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let productsService: ProductsService;
  let productDetailService: ProductDetailService;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListComponent],
      imports: [RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
    router = TestBed.inject(Router);
    productsService = TestBed.inject(ProductsService);
    productDetailService = TestBed.inject(ProductDetailService);
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
    spyOn(productsService, 'listProducts').and.callThrough();
    component.ngOnInit();
    expect(productsService.listProducts).toHaveBeenCalled();
  });

  it('should navigate to details page', () => {
    spyOn(router, 'navigate');

    const productName = 'tomato';
    const mockEvent: Event = new MouseEvent('click');
    spyOn(mockEvent, 'stopPropagation');

    component.navigateToDetails(mockEvent, productName);
    expect(mockEvent.stopPropagation).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith([
      'product-detail',
      productName,
    ]);
  });
});
