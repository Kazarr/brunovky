import { Injectable } from '@angular/core';
import {SideBarItem} from "./sideBarItem";

@Injectable({
  providedIn: 'root'
})
export class SideBarItemService {

  item: SideBarItem = {id: 1, name: 'wtf is my name', sum: 258,itemDate: new Date()};
  items: SideBarItem[] = [
    this.item,
    {id: 2, name: 'ja neviem uš', sum: 9, itemDate: new Date()},
    {id: 3, name: 'zidan', sum: 8, itemDate: new Date()}];

  constructor() { }

  getItems(): SideBarItem[] {
    return
  }

}
