import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlacesComponent } from './places/places.component';
import {PlaceComponent} from './places/place/place.component';

const appRoute: Routes = [
    { path: 'places', component: PlacesComponent },
    { path: 'place/:id', component: PlaceComponent }
];

@NgModule( {
    exports: [RouterModule],
    imports: [RouterModule.forRoot(appRoute)]
} )

export class AppRoutingModule {

}
