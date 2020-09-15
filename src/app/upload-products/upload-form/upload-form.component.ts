import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.scss'],
})
export class UploadFormComponent implements OnInit {
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.setupForm();
  }

  public checkForm(): void {
    if (this.form.valid) {
      this.uploadProducts();
    }
  }

  public setupForm(): void {
    this.form = this.formBuilder.group({
      name: [null, [Validators.required]],
      stock: [null, [Validators.required]],
      price: [null, [Validators.required]],
    });
  }

  public uploadProducts(): void {}
}
