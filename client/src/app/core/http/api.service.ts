import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, map } from 'rxjs/operators';
import { PlacesModel } from '../../modules/places/places.model';
import { PlacesService } from '../../modules/places/places.service';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URL = 'http://localhost:8900';

  constructor(private http: HttpClient, private placesService: PlacesService) {}

  getPlaces(): Observable<any> {
    return this.http.get(this.API_URL + '/places').pipe(
      map((resp: Response) => {
        const data = resp['_embedded'].places;

        this.placesService.setPlaces(data);

        return data;
      })
    );
  }

  // post(url, body, options)

  // delete(url, body)

  // put(url, data)

  // upload(url, file)
}
