import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { PRODUCT_DATA } from '../../products/constants';
import { Product } from '../../products/interfaces';

@Injectable({
  providedIn: 'root',
})
export class UploadProductsService {
  public loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    true
  );

  public uploadProducts(product: Product): Observable<boolean> {
    PRODUCT_DATA.push({
      ...product,
      updated: new Date().toString(),
    });
    return of(true);
  }
}
