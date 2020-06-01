import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationPanelPureCssComponent } from './navigation-panel-pure-css/navigation-panel-pure-css.component';
import { NavigationPanelGridComponent } from './navigation-panel-grid/navigation-panel-grid.component';
import { NavigationPanelGridFlexComponent } from './navigation-panel-grid-flex/navigation-panel-grid-flex.component';
import { NavigationPanelFlexComponent } from './navigation-panel-flex/navigation-panel-flex.component';



@NgModule({
  declarations: [NavigationPanelPureCssComponent, NavigationPanelGridComponent, NavigationPanelGridFlexComponent, NavigationPanelFlexComponent],
  exports: [
    NavigationPanelPureCssComponent,
    NavigationPanelGridComponent,
    NavigationPanelGridFlexComponent,
    NavigationPanelFlexComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NavigationModule { }
