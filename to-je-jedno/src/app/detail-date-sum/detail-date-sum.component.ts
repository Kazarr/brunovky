import {Component, OnInit} from '@angular/core';
import {ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-detail-date-sum',
  templateUrl: './detail-date-sum.component.html',
  styleUrls: ['./detail-date-sum.component.scss'],
  providers: [{provide: NG_VALUE_ACCESSOR, useExisting: DetailDateSumComponent, multi: true}]
})
export class DetailDateSumComponent implements OnInit, ControlValueAccessor {

  dateSumForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.dateSumForm = fb.group({
      date: [''],
      sum: ['']
    })
  }

  ngOnInit() {
  }

  registerOnChange(fn: any) {
    this.dateSumForm.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any) {
  }

  writeValue(obj: any) {
    this.dateSumForm.patchValue({
      date: obj.date,
      sum: obj.sum
    })
  }

}
