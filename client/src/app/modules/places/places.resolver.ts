import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';

import { PlacesService } from './places.service';
import { PlacesModel } from './places.model';
import { ApiService } from '../../core/http/api.service';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PlacesResolver implements Resolve<PlacesModel[]> {
  constructor(private api: ApiService, private placesService: PlacesService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const places = this.placesService.getPlaces();
    if (places.length === 0) {
      // noinspection TypeScriptValidateTypes
      return this.api.get('places').pipe(
        tap(data => {
          this.placesService.setPlaces(data);
        })
      );
    }
    return places;
  }
}
