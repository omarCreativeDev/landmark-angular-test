import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { delay, finalize, take } from 'rxjs/operators';
import { ProductDetailService } from '../services/product-detail.service';
import { SnackBarService } from '../../shared/services/snack-bar/snack-bar.service';
import { Router } from '@angular/router';
import { Product } from '../../products/interfaces';

@Component({
  selector: 'app-edit-price',
  templateUrl: './edit-price.component.html',
})
export class EditPriceComponent implements OnInit {
  @Input() public product: Product;
  public form: FormGroup;
  @ViewChild('ngForm') public ngForm;

  constructor(
    private formBuilder: FormBuilder,
    private productDetailService: ProductDetailService,
    private snackBarService: SnackBarService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.setupForm();
  }

  public checkForm(): void {
    const price = this.form.value.price;

    if (price && this.form.valid) {
      this.editPrice(price);
    }
  }

  public setupForm(): void {
    this.form = this.formBuilder.group(
      {
        price: [
          this.product ? this.product.price : null,
          [Validators.required],
        ],
      },
      { updateOn: 'submit' }
    );
  }

  public resetForm(): void {
    this.ngForm.resetForm();
    this.form.reset();
  }

  public editPrice(price: number): Subscription {
    this.productDetailService.loading$.next(true);

    return this.productDetailService
      .editPrice(this.product.name, price)
      .pipe(
        take(1),
        delay(1000),
        finalize(() => {
          this.productDetailService.loading$.next(false);
          this.router.navigate(['products']);
        })
      )
      .subscribe(() => {
        this.snackBarService.openSnackBar('Price updated successfully!');
      });
  }
}
