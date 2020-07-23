import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {SideBarItem} from "../side-bar-item/sideBarItem";
import {formatDate} from "@angular/common";
import {Store} from "@ngrx/store";
import {addItem} from "../items-state/items.actions";

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

  get item(): SideBarItem {
    return this._item;
  }

  @Input() set item(value) {
    this._item = value;

    if (this.item) {
      const itemDate = formatDate(this.item.itemDate, 'yyyy-MM-dd', 'sk');

      this.itemForm.setValue({
        name: this.item.name,
        dateSum: {
          date: itemDate,
          sum: this.item.sum
        }
      });
    }
  }

  private _item: SideBarItem;

  itemForm = this.fb.group({
    name: ['', Validators.required],
    dateSum: {
      date: [''],
      sum: [''],
    }
  })

  constructor(
    private fb: FormBuilder,
    private store: Store<{ itemState: { items: SideBarItem[] } }>
  ) {
  }

  ngOnInit() {
  }

  save() {
    const newItem = {
      id: 0,
      name: this.itemForm.controls.name.value,
      itemDate: this.itemForm.get('dateSum').value.date,
      sum: this.itemForm.get('dateSum').value.sum
    } as SideBarItem;
    this.store.dispatch(addItem({newItem: newItem}));
  }
}
