import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { ListService } from '../services/list.service';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let service: ListService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListComponent],
    }).compileComponents();
    service = TestBed.inject(ListService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch list of products when component initialises', () => {
    spyOn(service, 'listProducts').and.callThrough();
    component.ngOnInit();
    expect(service.listProducts).toHaveBeenCalled();
  });
});
