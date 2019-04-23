import { PlacesModel } from './places.model';
import { EventEmitter } from '@angular/core';

export class PlacesService {
    placeSelected = new EventEmitter<PlacesModel>();
    placesChanged = new EventEmitter<PlacesModel[]>();

    private places: Array<PlacesModel> = [
        new PlacesModel( 1, 'Praga', 1 ),
        new PlacesModel( 3, 'Vena', 1 ),
    ];

    getPlaces() {
        return this.places.slice();
    }

    getPlace(id: number) {
        return this.getPlaces().find(obj => obj.id === id);
    }

    addPlaces(placeModel: PlacesModel) {
        this.places.push(placeModel);
        this.placesChanged.emit(this.places.slice());
    }

    deletePlace(place: PlacesModel) {
        this.places.splice(this.places.findIndex(pl => pl.id === place.id && pl.user === place.user), 1);
        this.placesChanged.emit(this.places.slice());
    }


}
