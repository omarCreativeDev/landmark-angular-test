import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { ProductsService } from '../services/products.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let service: ProductsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [ReactiveFormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
    service = TestBed.inject(ProductsService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set up form when component initialises', () => {
    spyOn(component, 'setupForm');
    component.ngOnInit();
    expect(component.setupForm).toHaveBeenCalled();
  });

  it('should search products if form is valid', () => {
    spyOn(component, 'searchProducts');
    component.form.get('searchQuery').setValue('banana');
    component.checkForm();
    expect(component.searchProducts).toHaveBeenCalled();
  });

  it('should not search products if form is invalid', () => {
    spyOn(component, 'searchProducts');
    component.checkForm();
    expect(component.searchProducts).not.toHaveBeenCalled();
  });

  it('should invoke service when search form is submitted', () => {
    spyOn(service, 'searchProducts').and.callThrough();
    component.searchProducts('banana');
    expect(service.searchProducts).toHaveBeenCalledWith('banana');
  });
});
