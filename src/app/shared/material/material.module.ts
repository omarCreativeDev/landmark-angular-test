import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

const materialModules = [
  MatToolbarModule,
  MatButtonModule,
  MatSnackBarModule,
  MatTableModule,
  MatProgressSpinnerModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
];

@NgModule({
  imports: [...materialModules],
  exports: [...materialModules],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }],
})
export class MaterialModule {}
