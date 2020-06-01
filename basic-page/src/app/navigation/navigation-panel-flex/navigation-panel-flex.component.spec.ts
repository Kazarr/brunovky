import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationPanelFlexComponent } from './navigation-panel-flex.component';

describe('NavigationPanelFlexComponent', () => {
  let component: NavigationPanelFlexComponent;
  let fixture: ComponentFixture<NavigationPanelFlexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationPanelFlexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationPanelFlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
