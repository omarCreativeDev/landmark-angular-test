import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailComponent } from './product-detail.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProductDetailService } from './services/product-detail.service';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '../shared/material/material.module';
import { ActivatedRoute } from '@angular/router';

describe('ProductDetailComponent', () => {
  let component: ProductDetailComponent;
  let fixture: ComponentFixture<ProductDetailComponent>;
  let service: ProductDetailService;
  const activatedRoute = {
    snapshot: { params: { productName: 'orange' } },
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDetailComponent],
      imports: [RouterTestingModule, MaterialModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: activatedRoute,
        },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
    service = TestBed.inject(ProductDetailService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should invoke `getProductDetail()` component initialises', () => {
    spyOn(component, 'getProductDetail').and.callThrough();
    component.ngOnInit();
    expect(component.getProductDetail).toHaveBeenCalled();
  });

  it('should fetch product detail', () => {
    spyOn(service, 'getProductDetail').and.callThrough();
    component.getProductDetail();
    expect(service.getProductDetail).toHaveBeenCalled();
  });
});
