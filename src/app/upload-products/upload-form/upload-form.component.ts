import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { delay, finalize, take } from 'rxjs/operators';
import { UploadProductsService } from '../services/upload-products.service';
import { SnackBarService } from '../../shared/services/snack-bar/snack-bar.service';

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.scss'],
})
export class UploadFormComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private uploadProductsService: UploadProductsService,
    private router: Router,
    private snackBarService: SnackBarService
  ) {}

  ngOnInit(): void {
    this.setupForm();
  }

  public checkForm(): void {
    if (this.form.valid) {
      this.uploadProducts();
    }
  }

  public setupForm(): void {
    this.form = this.formBuilder.group({
      name: [null, [Validators.required]],
      stock: [null, [Validators.required]],
      price: [null, [Validators.required]],
    });
  }

  public uploadProducts(): Subscription {
    this.uploadProductsService.loading$.next(true);

    return this.uploadProductsService
      .uploadProducts(this.form.value)
      .pipe(
        take(1),
        delay(1000),
        finalize(() => {
          this.uploadProductsService.loading$.next(false);
          this.router.navigate(['products']);
        })
      )
      .subscribe(() => {
        this.snackBarService.openSnackBar('Products uploaded successfully!');
      });
  }
}
