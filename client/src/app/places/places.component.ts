import {Component, Injectable, Input, OnInit, Output, ViewChild} from '@angular/core';
import {PlaceComponent} from './place/place.component';
import {AddPlaceDialogComponent} from './add-place-dialog/add-place-dialog.component';
import {MatDialog} from '@angular/material';
import {Place} from './place/place';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})

export class PlacesComponent implements OnInit {
  name: string;

  places = [
    new Place(1, 'Praga'),
    new Place(3, 'Vena'),
  ];

  constructor(public dialog: MatDialog) {
  }

  addNewPlaceDialog(): void {
    const dialogRef = this.dialog.open(AddPlaceDialogComponent, {
      width: '250px',
      data: {name: this.name}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.name = result;
        this.places.push(new Place(5, this.name));
      }
    });
  }

  ngOnInit() {
  }

}
