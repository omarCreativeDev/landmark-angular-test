import { Injectable } from '@angular/core';
import { PRODUCT_DATA } from '../constants';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Product } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  public products$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(
    null
  );

  public listProducts(): Observable<Product[]> {
    return of(PRODUCT_DATA);
  }
}
