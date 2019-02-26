import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { PlacesComponent } from './places/places.component';

const appRoute: Routes = [
    { path: 'places', component: PlacesComponent }
];

@NgModule( {
    imports: []
} )

export class AppRoutingModule {

}
