import {SideBarItem} from "../side-bar-item/sideBarItem";
import {createSelector} from "@ngrx/store";

export const selectFeature = (state: {itemState: {items: SideBarItem[]}}) => state.itemState;
export const itemsSelector = createSelector(
  selectFeature,
  state => state.items
);
