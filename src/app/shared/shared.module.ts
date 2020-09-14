import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './components/header/header.component';

const shared = [HeaderComponent];

@NgModule({
  declarations: [...shared],
  imports: [RouterModule, MaterialModule],
  exports: [...shared],
})
export class SharedModule {}
