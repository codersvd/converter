import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ErrorPagesComponent } from './error-pages/error-pages.component';
import { PlaceComponent } from './places/place/place.component';
import { PlacesComponent } from './places/places.component';
import { AppComponent } from './app.component';

const appRoute: Routes = [
    { path: '', component: AppComponent },
    { path: 'places', component: PlacesComponent },
    { path: 'place/:id', component: PlaceComponent },
    { path: 'error-page', component: ErrorPagesComponent, data: { message: 'Page not found!' } },
    //{path: '404', component: PageNotFoundComponent},
    { path: '**', redirectTo: '/error-page' }
];

@NgModule( {
    exports: [ RouterModule ],
    imports: [ RouterModule.forRoot( appRoute ) ]
} )

export class AppRoutingModule {

}
