import {Component, Input, OnInit} from '@angular/core';
import {SideBarItem} from "./sideBarItem";

@Component({
  selector: 'app-side-bar-item',
  templateUrl: './side-bar-item.component.html',
  styleUrls: ['./side-bar-item.component.scss']
})
export class SideBarItemComponent implements OnInit {
  @Input()
  item: SideBarItem

  constructor() { }

  ngOnInit() {
  }

}
