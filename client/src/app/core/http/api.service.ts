import { Injectable } from '@angular/core';
import {
    HttpClient,
    HttpErrorResponse,
    HttpHeaders
} from '@angular/common/http';
import { catchError, shareReplay, map, retry } from 'rxjs/operators';
import { PlacesService } from '../../modules/places/places.service';
import { Observable } from 'rxjs/internal/Observable';
import { throwError } from 'rxjs/internal/observable/throwError';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    API_URL = 'http://localhost:8900/';

    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    constructor(private http: HttpClient) {}

    get(action: string) {
        return this.http.get(this.API_URL + action).pipe(
            retry(3),
            catchError(this.handleError),
            map((resp: Response) => {
                const data = resp['_embedded'][action];
                return data;
            }),
            shareReplay()
        );
    }

    post(action: string, data): Observable<any> {
        return this.http
            .post(this.API_URL + action, JSON.stringify(data), this.httpOptions)
            .pipe(catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                    `body was: ${error.error}`
            );
        }
        // return an observable with a user-facing error message
        return throwError('Something bad happened; please try again later.');
    }

    // delete(url, body)

    // put(url, data)

    // upload(url, file)
}
