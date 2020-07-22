import { Component, OnInit } from '@angular/core';
import {SideBarItem} from "../side-bar-item/sideBarItem";

@Component({
  selector: 'app-content-shell',
  templateUrl: './content-shell.component.html',
  styleUrls: ['./content-shell.component.scss']
})
export class ContentShellComponent implements OnInit {

  clickedItem: SideBarItem;

  constructor() { }

  ngOnInit() {
  }

  handle(value: SideBarItem) {
    this.clickedItem = value;
  }

}
