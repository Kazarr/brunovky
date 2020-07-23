import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarComponent } from './side-bar.component';
import {SideBarItemComponent} from "../side-bar-item/side-bar-item.component";
import {provideMockStore} from "@ngrx/store/testing";

describe('SideBarComponent', () => {
  let component: SideBarComponent;
  let fixture: ComponentFixture<SideBarComponent>;
  const initialState = {items: []};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SideBarComponent,
        SideBarItemComponent
      ],
      providers: [
        provideMockStore({initialState})
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
