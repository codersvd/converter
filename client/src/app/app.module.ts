import { BrowserAnimationsModule }          from '@angular/platform-browser/animations';
import { BrowserModule }                    from '@angular/platform-browser';
import { NgModule }                         from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddPlaceDialogComponent } from './modules/places/add-place-dialog/add-place-dialog.component';
import { PlaceComponent } from './modules/places/place/place.component';
import { PlacesComponent } from './modules/places/places.component';
import { LoginComponent } from './modules/login/login.component';
import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ErrorPagesComponent } from './error-pages/error-pages.component';
import { AppRoutingModule } from './app-routing.module';
import { PlacesService } from './modules/places/places.service';
import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';
import { PlacesResolver } from './modules/places/places.resolver';

@NgModule({
  declarations: [
    AppComponent,
    PlacesComponent,
    PlaceComponent,
    HomeComponent,
    LoginComponent,
    AddPlaceDialogComponent,
    PageNotFoundComponent,
    ErrorPagesComponent
  ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        MaterialModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
  entryComponents: [AddPlaceDialogComponent],
  providers: [PlacesService, PlacesResolver],
  bootstrap: [AppComponent]
})
export class AppModule {}
