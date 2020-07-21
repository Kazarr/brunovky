import { Component, OnInit } from '@angular/core';
import {SideBarItem} from "../side-bar-item/sideBarItem";
import {Observable, of} from "rxjs";
import {SideBarItemService} from "../side-bar-item/side-bar-item.service";

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  // items: SideBarItem[];
  item: SideBarItem = {id: 1, name: 'wtf is my name', sum: 258,itemDate: new Date()};
  items: SideBarItem[] = [
    this.item,
    {id: 2, name: 'ja neviem uš', sum: 9, itemDate: new Date()},
    {id: 3, name: 'zidan', sum: 8, itemDate: new Date()},
    {id: 4, name: 'kapraď', sum: 600, itemDate: new Date()},
    {id: 5, name: 'motorko', sum: 105, itemDate: new Date()},
    {id: 6, name: 'dina nie dina ale tina', sum: 3000, itemDate: new Date()}];
  // items$: Observable<SideBarItem> = of(this.items);


  constructor(itemService: SideBarItemService) { }

  ngOnInit() {
    // this.items = itemService.getItems();
  }

}
