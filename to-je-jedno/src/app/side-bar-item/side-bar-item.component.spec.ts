import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SideBarItemComponent} from './side-bar-item.component';
import {SideBarItem} from "./sideBarItem";

describe('SideBarItemComponent', () => {
  let component: SideBarItemComponent;
  let fixture: ComponentFixture<SideBarItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideBarItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarItemComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    component.item = {
      id: 0,
      name: '',
      sum: 0,
      itemDate: new Date()
    } as SideBarItem;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
