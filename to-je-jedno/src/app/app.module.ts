import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import localeSK from '@angular/common/locales/sk';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { SideBarItemComponent } from './side-bar-item/side-bar-item.component';
import { ContentShellComponent } from './content-shell/content-shell.component';
import {registerLocaleData} from "@angular/common";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

registerLocaleData(localeSK);

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SideBarComponent,
    ContentComponent,
    FooterComponent,
    SideBarItemComponent,
    ContentShellComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'sk'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
