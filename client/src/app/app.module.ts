import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlacesComponent } from './places/places.component';
import { PlaceComponent } from './places/place/place.component';
import {
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTabsModule
} from '@angular/material';
import { AddPlaceDialogComponent } from './places/add-place-dialog/add-place-dialog.component';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from "./app-routing.module";

@NgModule( {
    declarations: [
        AppComponent,
        PlacesComponent,
        PlaceComponent,
        AddPlaceDialogComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        MatTabsModule,
        MatIconModule,
        MatButtonModule,
        MatDialogModule,
        MatInputModule,
        MatFormFieldModule
    ],
    entryComponents: [
        AddPlaceDialogComponent
    ],
    providers: [],
    bootstrap: [ AppComponent ]
} )

export class AppModule {

}
