import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlacesComponent } from './places/places.component';
import { PlaceComponent } from './places/place/place.component';
import { AddPlaceDialogComponent } from './places/add-place-dialog/add-place-dialog.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from "./material.module";

import { AppRoutingModule } from "./app-routing.module";
import { PlacesService } from "./places/places.service";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ErrorPagesComponent } from './error-pages/error-pages.component';

@NgModule( {
    declarations: [
        AppComponent,
        PlacesComponent,
        PlaceComponent,
        AddPlaceDialogComponent,
        PageNotFoundComponent,
        ErrorPagesComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        MaterialModule
    ],
    entryComponents: [
        AddPlaceDialogComponent
    ],
    providers: [PlacesService],
    bootstrap: [ AppComponent ]
} )

export class AppModule {

}
