import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';

const components = [HeaderComponent, FooterComponent];
const modules = [MaterialModule, ReactiveFormsModule];

@NgModule({
  declarations: [...components],
  imports: [RouterModule, ...modules],
  exports: [...components, ...modules],
})
export class SharedModule {}
