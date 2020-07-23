import { Injectable } from '@angular/core';
import {SideBarItem} from "./sideBarItem";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SideBarItemService {

  private items: SideBarItem[] = [
    {id: 1, name: 'wtf is my name', sum: 258,itemDate: new Date('2019-09-08')},
    {id: 2, name: 'ja neviem uš', sum: 9, itemDate: new Date('2019-12-31')},
    {id: 3, name: 'zidan', sum: 8, itemDate: new Date('2020-01-01')},
    {id: 4, name: 'kapraď', sum: 600, itemDate: new Date('2020-03-15')},
    {id: 5, name: 'motorko', sum: 105, itemDate: new Date('2020-05-11')},
    {id: 6, name: 'dina nie dina ale tina', sum: 3000, itemDate: new Date('2020-07-20')}
  ];

  get items$(): Observable<SideBarItem[]> {
   return of(this.items);
  }

  addItem(item: SideBarItem): Observable<SideBarItem> {
    this.items = [...this.items, item];
    return of(item);
  }

  constructor() { }


}
