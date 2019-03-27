import { Component, Injectable, Input, OnInit, Output, ViewChild } from '@angular/core';
import { PlaceComponent } from './place/place.component';
import { AddPlaceDialogComponent } from './add-place-dialog/add-place-dialog.component';
import { MatDialog } from '@angular/material';
import { Place } from './place/place';

@Component( {
    selector: 'app-places',
    templateUrl: './places.component.html',
    styleUrls: [ './places.component.less' ]
} )

export class PlacesComponent implements OnInit {
    name: string;
    
    places: Array<Place> = [
        new Place( 1, 'Praga', 1 ),
        new Place( 3, 'Vena', 1 ),
    ];

    constructor( public dialog: MatDialog ) {
    }

    addNewPlaceDialog(): void {
        this.name = "";
        const dialogRef = this.dialog.open( AddPlaceDialogComponent, {
            width: '250px',
            data: { name: this.name }
        } );
    
        dialogRef.afterClosed().subscribe( result => {
            console.log( result );
            if ( result ) {
                this.name = result;
                this.places.push( new Place( Math.floor( Math.random() * 100 ), this.name, 1 ) );
            }
        } );
    }

    deleteItem( data: Place ) {
        if ( window.confirm( 'Are sure you want to delete this item?' ) ) {
            console.log( this.places );
            this.places = this.places.filter( obj => obj.id !== data.id && obj.user === data.user );
            console.log( data, this.places );
        }
    }
    
    ngOnInit() {
    }
    
}
