import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

const components = [HeaderComponent, FooterComponent];

@NgModule({
  declarations: [...components],
  imports: [RouterModule, MaterialModule],
  exports: [...components, MaterialModule],
})
export class SharedModule {}
