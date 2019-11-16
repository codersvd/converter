import { PlacesModel } from './places.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { ApiService } from '../../core/http/api.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PlacesService {
  placeSelected = new EventEmitter<PlacesModel>();
  placesChanged = new Subject<PlacesModel[]>();

  private places: PlacesModel[] = [];

  constructor(private http: HttpClient, private api: ApiService) {}

  setPlaces(places: PlacesModel[]) {
    this.places = places;
    this.placesChanged.next(this.places.slice());
  }

  getPlaces() {
    return this.places.slice();
  }

  getPlace(alias: string) {
    const place = this.getPlaces().find(obj => obj.alias === alias);
    return place;
  }

  addPlaces(placeModel: PlacesModel) {
    this.api.post('places', placeModel).subscribe(data => {
      this.places.push(data);
      this.placesChanged.next(this.places.slice());
    });
  }

  deletePlace(place: PlacesModel) {
    this.places.splice(
      this.places.findIndex(
        pl => pl.alias === place.alias && pl.user === place.user
      ),
      1
    );
    this.placesChanged.next(this.places.slice());
  }
}
