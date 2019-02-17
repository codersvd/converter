import {Component, OnInit, Output} from '@angular/core';
import {Place} from './place';

@Component({
  selector: '[app-place]',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {
  @Output() place: Place;

  constructor() {
  }

  ngOnInit() {
  }

  deletePlace(){
    console.log(this.id, this.name);
  }

}
