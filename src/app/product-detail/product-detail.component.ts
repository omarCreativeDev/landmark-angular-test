import { Component, OnInit } from '@angular/core';
import { Product } from '../products/interfaces';
import { ProductDetailService } from './services/product-detail.service';
import { delay, finalize, take } from 'rxjs/operators';
import { Observable, of, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent implements OnInit {
  public loading$: Observable<boolean> = this.productDetailService.loading$;
  public productDetail$: Observable<any>;
  public displayedColumns: string[] = this.productDetailService
    .displayedColumns;

  constructor(
    private productDetailService: ProductDetailService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getProductDetail();
  }

  public getProductDetail(): Subscription {
    this.productDetailService.loading$.next(true);

    return this.productDetailService
      .getProductDetail(this.activatedRoute.snapshot.params.productName)
      .pipe(
        take(1),
        delay(1000),
        finalize(() => this.productDetailService.loading$.next(false))
      )
      .subscribe((response: Product | boolean) => {
        if (!response) {
          this.router.navigate(['products']);
        }
        this.productDetail$ = of([response]);
      });
  }
}
