import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AddPlaceDialogComponent } from './modules/places/add-place-dialog/add-place-dialog.component';
import { PlaceComponent } from './modules/places/place/place.component';
import { PlacesComponent } from './modules/places/places.component';
import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ErrorPagesComponent } from './error-pages/error-pages.component';
import { AppRoutingModule } from './app-routing.module';
import { PlacesService } from './modules/places/places.service';

@NgModule({
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
  entryComponents: [AddPlaceDialogComponent],
  providers: [PlacesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
