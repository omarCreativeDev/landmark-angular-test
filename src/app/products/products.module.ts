import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ListComponent } from './list/list.component';
import { SharedModule } from '../shared/shared.module';
import { SearchComponent } from './search/search.component';
import { ProductsComponent } from './products.component';

@NgModule({
  declarations: [ListComponent, SearchComponent, ProductsComponent],
  imports: [CommonModule, ProductsRoutingModule, SharedModule],
})
export class ProductsModule {}
