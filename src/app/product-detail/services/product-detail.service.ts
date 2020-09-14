import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Product } from '../../products/interfaces';
import { PRODUCT_DATA } from '../../products/constants';
import { ProductsService } from '../../products/services/products.service';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailService {
  public loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    true
  );
  public displayedColumns: string[] = [
    ...this.productsService.displayedColumns,
    'edit',
  ];

  constructor(private productsService: ProductsService) {}

  public getProductDetail(productName: string): Observable<Product | boolean> {
    const mockedProductDetail: Product = PRODUCT_DATA.filter(
      (item: Product) => item.name === productName
    )[0];
    return of(mockedProductDetail);
  }
}
