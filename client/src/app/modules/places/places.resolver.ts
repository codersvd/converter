import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { PlacesService } from './places.service';
import { PlacesModel } from './places.model';
import { ApiService } from '../../core/http/api.service';

@Injectable()
export class PlacesResolver implements Resolve<PlacesModel[]> {
  constructor(private api: ApiService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<PlacesModel[]> {
    return this.api.getPlaces();
  }
}
