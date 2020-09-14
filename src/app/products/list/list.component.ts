import { Component, OnInit } from '@angular/core';
import { delay, finalize, take } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { Product } from '../interfaces';
import { ProductsService } from '../services/products.service';
import { ProductDetailService } from '../../product-detail/services/product-detail.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  public loading$: Observable<boolean> = this.productsService.loading$;
  public products$: Observable<Product[]> = this.productsService.products$;
  public displayedColumns: string[] = this.productsService.displayedColumns;

  constructor(
    private productsService: ProductsService,
    private productDetailService: ProductDetailService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listProducts();
  }

  public listProducts(): Subscription {
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

  public navigateToDetails(
    event: Event,
    productName: string
  ): Promise<boolean> {
    event.stopPropagation();
    return this.router.navigate(['product-detail', productName]);
  }
}
