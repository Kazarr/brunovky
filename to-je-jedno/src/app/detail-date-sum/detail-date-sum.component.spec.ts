import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDateSumComponent } from './detail-date-sum.component';
import {ReactiveFormsModule} from "@angular/forms";

describe('DetailDateSumComponent', () => {
  let component: DetailDateSumComponent;
  let fixture: ComponentFixture<DetailDateSumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailDateSumComponent ],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailDateSumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
