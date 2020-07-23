import {Directive, ElementRef, HostListener} from '@angular/core';
import {NgControl} from "@angular/forms";

@Directive({
  selector: '[appDigitsOnly]'
})
export class DigitsOnlyDirective {

  constructor(private element: ElementRef) { }

  @HostListener('input', ['$event.target.value'])
  updateInput(value: any) {
    const newValue = value.replace(/\D/g, '');
    console.log(value, newValue);
    this.element.nativeElement.value = newValue;
  }
}
