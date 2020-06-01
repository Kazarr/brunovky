import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationPanelGridComponent } from './navigation-panel-grid.component';

describe('NavigationPanelGridComponent', () => {
  let component: NavigationPanelGridComponent;
  let fixture: ComponentFixture<NavigationPanelGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationPanelGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationPanelGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
