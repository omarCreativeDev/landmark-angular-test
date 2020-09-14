import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailRoutingModule } from './product-detail-routing.module';
import { ProductDetailComponent } from './product-detail.component';
import { SharedModule } from '../shared/shared.module';
import { EditPriceComponent } from './edit-price/edit-price.component';

@NgModule({
  declarations: [ProductDetailComponent, EditPriceComponent],
  imports: [CommonModule, ProductDetailRoutingModule, SharedModule],
})
export class ProductDetailModule {}
