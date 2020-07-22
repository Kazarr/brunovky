import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {EMPTY, Observable} from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import {SideBarItemService} from "../side-bar-item/side-bar-item.service";
import * as invoiceActions from './items.actions';
import {Action} from "@ngrx/store";

@Injectable()
export class ItemsEffects {

  @Effect()
  loadItems$: Observable<Action> = this.actions$.pipe(
    ofType('[SideBarItem Component] Get'),
    mergeMap(() => this.itemService.items$
      .pipe(
        map(items => invoiceActions.getSuccess({ items: items})),
        catchError(() => EMPTY)
      ))
    );

  constructor(
    private actions$: Actions,
    private itemService: SideBarItemService
  ) {}
}
