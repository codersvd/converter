import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlacesModel } from '../../modules/places/places.model';
import { PlacesService } from '../../modules/places/places.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URL = 'http://localhost:8900';

  constructor(private http: HttpClient, private placesService: PlacesService) {}

  getPlaces() {
    this.http.get<PlacesModel[]>(this.API_URL + '/places').subscribe(places => {
      this.placesService.setPlaces(places['_embedded'].places);
    });
  }

  // post(url, body, options)

  // delete(url, body)

  // put(url, data)

  // upload(url, file)
}
