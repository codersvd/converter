import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { AddPlaceDialogComponent } from './add-place-dialog/add-place-dialog.component';
import { PlacesService } from './places.service';
import { PlacesModel } from './places.model';
import { ApiService } from '../../core/http/api.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
    selector: 'app-places',
    templateUrl: './places.component.html',
    styleUrls: ['./places.component.less']
})
export class PlacesComponent implements OnInit {
    name: string;

    public places: PlacesModel[] = [];

    selectedPlace = 1;

    constructor(
        public dialog: MatDialog,
        private route: ActivatedRoute,
        private router: Router,
        private placesService: PlacesService
    ) {}

    ngOnInit() {
        this.placesService.placesChanged.subscribe((places: PlacesModel[]) => {
            this.places = places;

            const firstPlace = this.placesService.getPlaces()[0];
            if (this.placesService.getPlaces().length <= 1) {
                this.router.navigate(['place', firstPlace.id], {
                    relativeTo: this.route
                });
            }
        });
    }

    addNewPlaceDialog(): void {
        this.name = '';
        const dialogRef = this.dialog.open(AddPlaceDialogComponent, {
            width: '250px',
            data: { name: this.name }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.name = result;
                this.placesService.addPlaces(
                    new PlacesModel(
                        Math.floor(Math.random() * 100),
                        this.name,
                        1
                    )
                );

                const firstPlace = this.placesService.getPlaces()[0];
                if (this.placesService.getPlaces().length <= 1) {
                    this.router.navigate(['place', firstPlace.id], {
                        relativeTo: this.route
                    });
                }
            }
        });
    }

    deleteItem(data: PlacesModel) {
        if (window.confirm('Are sure you want to delete this item?')) {
            this.placesService.deletePlace(data);
            const currentId = +this.placesService.placeSelected;
            if (currentId === data.id) {
                const firstPlace = this.placesService.getPlaces()[0];
                if (this.placesService.getPlaces().length > 0) {
                    this.router.navigate(['place', firstPlace.id], {
                        relativeTo: this.route
                    });
                }
            }
        }
        return false;
    }
}
