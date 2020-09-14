import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../interfaces';
import { ProductsService } from '../services/products.service';
import { delay, finalize, take } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  public form: FormGroup;
  @ViewChild('ngForm') public ngForm;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.setupForm();
  }

  public checkForm(): void {
    const searchQuery = this.form.value.searchQuery;

    if (searchQuery && searchQuery.length && this.form.valid) {
      this.searchProducts(searchQuery.trim());
    }
  }

  public setupForm(): void {
    this.form = this.formBuilder.group(
      {
        searchQuery: [null, [Validators.required]],
      },
      { updateOn: 'submit' }
    );
  }

  public searchProducts(searchQuery: string): Subscription {
    this.productsService.loading$.next(true);

    return this.productsService
      .searchProducts(searchQuery)
      .pipe(
        take(1),
        delay(1000),
        finalize(() => this.productsService.loading$.next(false))
      )
      .subscribe((response: Product[]) =>
        this.productsService.products$.next(response)
      );
  }

  public resetSearch(): Subscription {
    this.ngForm.resetForm();
    this.form.reset();
    this.productsService.loading$.next(true);

    return this.productsService
      .listProducts()
      .pipe(
        take(1),
        delay(1000),
        finalize(() => this.productsService.loading$.next(false))
      )
      .subscribe((response: Product[]) =>
        this.productsService.products$.next(response)
      );
  }
}
