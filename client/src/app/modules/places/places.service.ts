import { PlacesModel } from './places.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { ApiService } from '../../core/http/api.service';

export class PlacesService {
  placeSelected = new EventEmitter<PlacesModel>();
  placesChanged = new Subject<PlacesModel[]>();

  private places: PlacesModel[] = [];

  setPlaces(places: PlacesModel[]) {
    this.places = places;
    this.placesChanged.next(this.places.slice());
  }

  getPlaces() {
    return this.places.slice();
  }

  getPlace(id: number) {
    return this.getPlaces().find(obj => obj.id === +id);
  }

  addPlaces(placeModel: PlacesModel) {
    this.places.push(placeModel);
    this.placesChanged.next(this.places.slice());
  }

  deletePlace(place: PlacesModel) {
    this.places.splice(
      this.places.findIndex(pl => pl.id === place.id && pl.user === place.user),
      1
    );
    this.placesChanged.next(this.places.slice());
  }
}
