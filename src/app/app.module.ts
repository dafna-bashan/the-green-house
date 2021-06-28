import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreenHouseAppComponent } from './pages/green-house-app/green-house-app.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductDetailsPageComponent } from './pages/product-details-page/product-details-page.component';
import { ProductEditPageComponent } from './pages/product-edit-page/product-edit-page.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { ProductFilterComponent } from './cmps/product-filter/product-filter.component';
import { ProductPreviewComponent } from './cmps/product-preview/product-preview.component';
import { ProductListComponent } from './cmps/product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './store/app.effects';
import { environment } from '../environments/environment';
import { reducers, metaReducers } from './store/store';

@NgModule({
  declarations: [
    AppComponent,
    GreenHouseAppComponent,
    ProductPageComponent,
    ProductDetailsPageComponent,
    ProductEditPageComponent,
    AppHeaderComponent,
    ProductFilterComponent,
    ProductPreviewComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([AppEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
