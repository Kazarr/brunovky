import {DigitsOnlyDirective} from './digits-only.directive';
import {Component} from "@angular/core";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {By} from "@angular/platform-browser";

@Component({
  template: `<input type="text" appDigitsOnly>`
})
class TestDigitsOnlyComponent { }

describe('DigitsOnlyDirective', () => {
  let component: TestDigitsOnlyComponent;
  let fixture: ComponentFixture<TestDigitsOnlyComponent>;
  let input;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        DigitsOnlyDirective,
        TestDigitsOnlyComponent
      ]
    });
    fixture = TestBed.createComponent(TestDigitsOnlyComponent);
    component = fixture.componentInstance;
    input = fixture.debugElement.query(By.css('input')).nativeElement;

    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });
});
