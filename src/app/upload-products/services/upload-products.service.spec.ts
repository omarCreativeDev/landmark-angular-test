import { TestBed } from '@angular/core/testing';

import { UploadProductsService } from './upload-products.service';

describe('UploadProductsService', () => {
  let service: UploadProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
