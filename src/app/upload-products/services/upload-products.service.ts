import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Product } from '../../products/interfaces';
import { ProductsService } from '../../products/services/products.service';

@Injectable({
  providedIn: 'root',
})
export class UploadProductsService {
  public loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    true
  );

  constructor(private productsService: ProductsService) {}

  public uploadProducts(products: Product[]): Observable<Product[]> {
    this.productsService.products = products.map((product: Product) => ({
      ...product,
      updated: new Date().toString(),
    }));
    return of(this.productsService.products);
  }
}
