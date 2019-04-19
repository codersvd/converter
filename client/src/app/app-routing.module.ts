import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlacesComponent } from './places/places.component';
import {PlaceComponent} from './places/place/place.component';
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const appRoute: Routes = [
    { path: 'places', component: PlacesComponent },
    { path: 'place/:id', component: PlaceComponent },
    { path: "404", component: PageNotFoundComponent},
    { path: "**", redirectTo: "/404" }
];

@NgModule( {
    exports: [RouterModule],
    imports: [RouterModule.forRoot(appRoute)]
} )

export class AppRoutingModule {

}
