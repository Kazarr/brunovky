import {createAction, props} from '@ngrx/store';
import {SideBarItem} from "../side-bar-item/sideBarItem";

export const get = createAction('[SideBarItem Component] Get');
export const getSuccess = createAction('[SideBarItem Component] Get Success', props<{ items: SideBarItem[] }>());
export const addItem = createAction('[SideBarItem Component] Add Item', props<{newItem: SideBarItem}>());
export const addItemSuccess = createAction('[SideBarItem Component] Add Item Success', props<{item: SideBarItem}>());
