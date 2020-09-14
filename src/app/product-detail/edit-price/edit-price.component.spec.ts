import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPriceComponent } from './edit-price.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { PRODUCT_DATA } from '../../products/constants';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductDetailService } from '../services/product-detail.service';
import { SnackBarService } from '../../shared/services/snack-bar/snack-bar.service';
import { of } from 'rxjs';

describe('EditPriceComponent', () => {
  let component: EditPriceComponent;
  let fixture: ComponentFixture<EditPriceComponent>;
  let productDetailService: ProductDetailService;
  let snackBarService: SnackBarService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditPriceComponent],
      imports: [
        ReactiveFormsModule,
        MaterialModule,
        RouterTestingModule,
        BrowserAnimationsModule,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
    productDetailService = TestBed.inject(ProductDetailService);
    snackBarService = TestBed.inject(SnackBarService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPriceComponent);
    component = fixture.componentInstance;
    component.product = PRODUCT_DATA[0];
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

  it('should invoke `editPrice()` if form is valid', () => {
    spyOn(component, 'editPrice');
    component.form.get('price').setValue(1.78);
    component.checkForm();
    expect(component.editPrice).toHaveBeenCalledWith(1.78);
  });

  it('should reset form', () => {
    spyOn(component.ngForm, 'resetForm');
    spyOn(component.form, 'reset');

    component.resetForm();

    expect(component.ngForm.resetForm).toHaveBeenCalled();
    expect(component.form.reset).toHaveBeenCalled();
  });

  it('should edit price and invoke snack bar', () => {
    spyOn(productDetailService, 'editPrice').and.callThrough();
    component.editPrice(1.99);
    expect(productDetailService.editPrice).toHaveBeenCalled();
  });
});
