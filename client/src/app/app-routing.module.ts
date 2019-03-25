import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlacesComponent } from './places/places.component';

const appRoute: Routes = [
    { path: 'places', component: PlacesComponent }
];

@NgModule( {
    exports: [RouterModule],
    imports: [RouterModule.forRoot(appRoute)]
} )

export class AppRoutingModule {

}
