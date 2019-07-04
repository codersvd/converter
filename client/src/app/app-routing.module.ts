import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ErrorPagesComponent } from './error-pages/error-pages.component';
import { PlaceComponent } from './modules/places/place/place.component';
import { PlacesComponent } from './modules/places/places.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { PlacesModel } from './modules/places/places.model';
import { PlacesResolver } from './modules/places/places.resolver';

const appRoute: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    resolve: { places: PlacesResolver }
  },
  {
    path: 'places',
    component: PlacesComponent,
    resolve: { places: PlacesResolver }
  },
  {
    path: 'place/:alias',
    component: PlaceComponent,
    resolve: { places: PlacesResolver }
  },
  {
    path: 'error-page',
    component: ErrorPagesComponent,
    data: { message: 'Page not found!' }
  },
  { path: '**', redirectTo: '/error-page' }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(appRoute)]
})
export class AppRoutingModule {}
