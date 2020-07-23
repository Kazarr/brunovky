import {createReducer, on} from '@ngrx/store';
import {addItemSuccess, getSuccess} from "./items.actions";


export const initialState = {
  items: []
};

const _itemsReducer = createReducer(initialState,
  on(getSuccess, (state, payload) => ({...state, items: payload.items})),
  on(addItemSuccess, (state, payload) => ({...state, items: [...state.items, payload.item]}))
);

export function itemsReducer(state, action) {
  return _itemsReducer(state, action);
}
