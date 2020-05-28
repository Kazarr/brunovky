import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationPanelPureCssComponent } from './navigation-panel-pure-css.component';

describe('NavigationPanelPureCssComponent', () => {
  let component: NavigationPanelPureCssComponent;
  let fixture: ComponentFixture<NavigationPanelPureCssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationPanelPureCssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationPanelPureCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
