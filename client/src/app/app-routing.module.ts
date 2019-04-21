import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PlacesComponent} from './places/places.component';
import {PlaceComponent} from './places/place/place.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AppComponent} from './app.component';
import {ErrorPagesComponent} from './error-pages/error-pages.component';

const appRoute: Routes = [
  {path: '', component: AppComponent},
  {path: 'places', component: PlacesComponent},
  {path: 'place/:id', component: PlaceComponent},
  {path: 'error-page', component: ErrorPagesComponent, data: { message: 'Page not found!'}},
  //{path: '404', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/error-page'}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(appRoute)]
})

export class AppRoutingModule {

}
