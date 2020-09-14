import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';
import { delay, finalize, take } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { Product } from '../interfaces';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  public loading = true;
  public displayedColumns: string[] = ['name', 'stock', 'updated', 'price'];
  public products$: Observable<Product[]> = this.listService.products$;

  constructor(private listService: ListService) {}

  ngOnInit(): void {
    this.listProducts();
  }

  public listProducts(): Subscription {
    return this.listService
      .listProducts()
      .pipe(
        take(1),
        delay(1000),
        finalize(() => (this.loading = false))
      )
      .subscribe((response) => this.listService.products$.next(response));
  }
}
