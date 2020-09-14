import { Injectable } from '@angular/core';
import { PRODUCT_DATA } from '../constants';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Product } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  public loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    true
  );
  public products$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(
    null
  );
  public displayedColumns: string[] = ['name', 'stock', 'updated', 'price'];

  public listProducts(): Observable<Product[]> {
    return of(PRODUCT_DATA);
  }

  public searchProducts(searchQuery: string): Observable<Product[]> {
    const mockedSearchResults: Product[] = PRODUCT_DATA.filter(
      (item: Product) => item.name === searchQuery
    );
    return of(mockedSearchResults);
  }
}
