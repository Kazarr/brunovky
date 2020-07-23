import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {SideBarItem} from "../side-bar-item/sideBarItem";
import {formatDate} from "@angular/common";

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
      const itemDate = formatDate(this.item.itemDate,'yyyy-MM-dd','sk');

      this.itemForm.setValue({
        name: this.item.name,
        date: itemDate,
        sum: this.item.sum
      });
    }
  }

  onClick() {
    console.log(this.itemForm.value);
  }
}
