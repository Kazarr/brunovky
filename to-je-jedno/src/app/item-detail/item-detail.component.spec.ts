import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ItemDetailComponent} from './item-detail.component';
import { ReactiveFormsModule} from "@angular/forms";
import {DetailDateSumComponent} from "../detail-date-sum/detail-date-sum.component";
import {provideMockStore} from "@ngrx/store/testing";

describe('ItemDetailComponent', () => {
  let component: ItemDetailComponent;
  let fixture: ComponentFixture<ItemDetailComponent>;
  const initialState = {items: []};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ItemDetailComponent,
        DetailDateSumComponent
      ],
      imports: [ReactiveFormsModule],
      providers: [provideMockStore({initialState})]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
