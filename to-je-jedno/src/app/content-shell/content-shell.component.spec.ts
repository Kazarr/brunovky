import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentShellComponent } from './content-shell.component';
import {Component, Input} from "@angular/core";

describe('ContentShellComponent', () => {
  let component: ContentShellComponent;
  let fixture: ComponentFixture<ContentShellComponent>;

  @Component({
    template: ``,
    selector: 'app-side-bar'
  })
  class MockSideBarComponent{}

  @Component({
    template: ``,
    selector: 'app-item-detail'
  })
  class MockItemDetailComponent{
    @Input() item;
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ContentShellComponent,
        MockSideBarComponent,
        MockItemDetailComponent
      ],
      imports: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
