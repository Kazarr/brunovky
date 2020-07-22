import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SideBarItem} from "../side-bar-item/sideBarItem";
import {Store} from "@ngrx/store";
import {get} from "../items-state/items.actions";
import {itemsSelector} from "../items-state/items.selector";

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  items: SideBarItem[];

  @Output()
  clicked = new EventEmitter<SideBarItem>();

  constructor(private store: Store<{itemState: {items: SideBarItem[]}}>) { this.store.dispatch(get()); }

  ngOnInit() {
    this.store.select(itemsSelector).subscribe(next => this.items = next)
  }

  onItemClick(value: SideBarItem) {
    this.clicked.emit(value);
  }
}


