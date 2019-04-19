import { Component, Injectable, Input, OnInit, Output, ViewChild } from '@angular/core';
import { PlaceComponent } from './place/place.component';
import { AddPlaceDialogComponent } from './add-place-dialog/add-place-dialog.component';
import { MatDialog } from '@angular/material';
import { PlacesModel } from './places.model';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { PlacesService } from "./places.service";

@Component( {
    selector: 'app-places',
    templateUrl: './places.component.html',
    styleUrls: [ './places.component.less' ]
} )

export class PlacesComponent implements OnInit {
    name: string;
    
    places: Array<PlacesModel>;
    
    selectedPlace: number = 1;
    
    constructor( public dialog: MatDialog,
                 private route: ActivatedRoute,
                 private router: Router,
                 private placesService: PlacesService ) {
    }
    
    ngOnInit() {
        this.places = this.placesService.getPlaces();
        this.placesService.placesChanged.subscribe((places: PlacesModel[])=>{
            this.places = places;
        });
    }
    
    addNewPlaceDialog(): void {
        this.name = "";
        const dialogRef = this.dialog.open( AddPlaceDialogComponent, {
            width: '250px',
            data: { name: this.name }
        } );
        
        dialogRef.afterClosed().subscribe( result => {
            if ( result ) {
                this.name = result;
                this.placesService.addPlaces( new PlacesModel( Math.floor( Math.random() * 100 ), this.name, 1 ) );
            }
        } );
    }
    
    deleteItem( data: PlacesModel ) {
        if ( window.confirm( 'Are sure you want to delete this item?' ) ) {
            this.placesService.deletePlace(data);
            let currentId = +this.placesService.placeSelected;
            if(currentId === data.id) {
                let firstPlace = this.placesService.getPlaces()[ 0 ];
                this.router.navigate( [ "place", firstPlace.id ], { relativeTo: this.route } );
            }
        }
        return false;
    }
    
}
