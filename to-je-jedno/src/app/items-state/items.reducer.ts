import { createReducer, on } from '@ngrx/store';
import {get, getSuccess} from "./items.actions";


export const initialState = {
  items: []
};

const _itemsReducer = createReducer(initialState,
  on(getSuccess, (state, payload) => ({...state, items : payload.items}))
);

export function itemsReducer(state, action) {
  return _itemsReducer(state, action);
}
