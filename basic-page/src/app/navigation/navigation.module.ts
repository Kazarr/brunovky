import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationPanelPureCssComponent } from './navigation-panel-pure-css/navigation-panel-pure-css.component';



@NgModule({
  declarations: [NavigationPanelPureCssComponent],
  exports: [
    NavigationPanelPureCssComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NavigationModule { }
