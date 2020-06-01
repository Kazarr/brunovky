import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationPanelPureCssComponent } from './navigation-panel-pure-css/navigation-panel-pure-css.component';
import { NavigationPanelGridComponent } from './navigation-panel-grid/navigation-panel-grid.component';
import { NavigationPanelGridFlexComponent } from './navigation-panel-grid-flex/navigation-panel-grid-flex.component';



@NgModule({
  declarations: [NavigationPanelPureCssComponent, NavigationPanelGridComponent, NavigationPanelGridFlexComponent],
    exports: [
        NavigationPanelPureCssComponent,
        NavigationPanelGridComponent,
        NavigationPanelGridFlexComponent
    ],
  imports: [
    CommonModule
  ]
})
export class NavigationModule { }
