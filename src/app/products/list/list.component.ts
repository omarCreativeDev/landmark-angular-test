import { Component, OnInit } from '@angular/core';
import { delay, finalize, take } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { Product } from '../interfaces';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  public loading$: Observable<boolean> = this.productsService.loading$;
  public products$: Observable<Product[]> = this.productsService.products$;
  public displayedColumns: string[] = ['name', 'stock', 'updated', 'price'];

  constructor(private productsService: ProductsService) {}

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
}
