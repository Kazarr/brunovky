import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationPanelGridFlexComponent } from './navigation-panel-grid-flex.component';

describe('NavigationPanelGridFlexComponent', () => {
  let component: NavigationPanelGridFlexComponent;
  let fixture: ComponentFixture<NavigationPanelGridFlexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationPanelGridFlexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationPanelGridFlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
