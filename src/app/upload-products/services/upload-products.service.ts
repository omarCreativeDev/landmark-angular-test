import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { PRODUCT_DATA } from '../../products/constants';
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

  public uploadProducts(product: Product): Observable<boolean> {
    this.productsService.products = [
      {
        ...product,
        updated: new Date().toString(),
      },
    ];
    return of(true);
  }
}
