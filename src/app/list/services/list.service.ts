import { Injectable } from '@angular/core';
import { PRODUCT_DATA } from '../constants';
import { Observable, of } from 'rxjs';
import { Product } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  public listProducts(): Observable<Product[]> {
    return of(PRODUCT_DATA);
  }
}
