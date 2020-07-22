import {createAction, props} from '@ngrx/store';
import {SideBarItem} from "../side-bar-item/sideBarItem";

export const get = createAction('[SideBarItem Component] Get');
export const getSuccess = createAction('[SideBarItem Component] Get Success', props<{items: SideBarItem[]}>());
// export const decrement = createAction('[Counter Component] Decrement');
// export const reset = createAction('[Counter Component] Reset');
