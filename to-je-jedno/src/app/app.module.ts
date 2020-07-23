import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import localeSK from '@angular/common/locales/sk';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {SideBarComponent} from './side-bar/side-bar.component';
import {FooterComponent} from './footer/footer.component';
import {SideBarItemComponent} from './side-bar-item/side-bar-item.component';
import {ContentShellComponent} from './content-shell/content-shell.component';
import {registerLocaleData} from "@angular/common";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {itemsReducer} from "./items-state/items.reducer";
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {ItemsEffects} from "./items-state/items.effects";
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {ItemDetailComponent} from './item-detail/item-detail.component';
import {ReactiveFormsModule} from "@angular/forms";
import {DetailDateSumComponent} from './detail-date-sum/detail-date-sum.component';
import {DirectivesModule} from "./directives/directives.module";
import {PipesModule} from "./pipes/pipes.module";

registerLocaleData(localeSK);

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SideBarComponent,
    FooterComponent,
    SideBarItemComponent,
    ContentShellComponent,
    ItemDetailComponent,
    DetailDateSumComponent
  ],
  imports: [
    DirectivesModule,
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({itemState: itemsReducer}),
    EffectsModule.forRoot([ItemsEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
    ReactiveFormsModule,
    PipesModule,
  ],
  providers: [{provide: LOCALE_ID, useValue: 'sk'}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
