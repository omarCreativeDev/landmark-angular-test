import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces';
import { ListService } from '../services/list.service';
import { delay, finalize, take } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  public loading = true;
  public displayedColumns: string[] = ['name', 'stock', 'updated', 'price'];
  public dataSource: Product[];

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
      .subscribe((response) => (this.dataSource = response));
  }
}
