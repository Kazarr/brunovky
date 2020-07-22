import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {SideBarItem} from "../side-bar-item/sideBarItem";

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit, OnChanges {

  @Input()
  item: SideBarItem;

  itemForm = this.fb.group({
    name: ['', Validators.required],
    date: [''],
    sum: [''],
  })

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.item) {
      // const itemDate = {
      //   year: this.item.itemDate.getUTCFullYear(),
      //   month: this.item.itemDate.getUTCMonth() + 1,
      //   day: this.item.itemDate.getUTCDate()
      // };

      this.itemForm.setValue({
        name: this.item.name,
        date: new Date(this.item.itemDate),
        sum: this.item.sum
      });
      // console.log('setujem', new Date(this.item.itemDate));
      // console.log('date', this.itemForm.controls['date'].value);
    }
  }

  onClick() {
    console.log(this.itemForm.value);
  }
}
