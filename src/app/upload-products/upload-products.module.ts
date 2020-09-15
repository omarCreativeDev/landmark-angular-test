import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadFormComponent } from './upload-form/upload-form.component';
import { UploadProductsRoutingModule } from './upload-products-routing.module';

@NgModule({
  declarations: [UploadFormComponent],
  imports: [CommonModule, UploadProductsRoutingModule],
})
export class UploadProductsModule {}
