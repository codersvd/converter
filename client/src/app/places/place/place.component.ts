import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Place} from './place';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {
  @Input() place: Place;
  @Output() itemDeleted = new EventEmitter<Place>();

  constructor() {
  }

  ngOnInit() {
  }

  onDeleteItem() {
    this.itemDeleted.emit(this.place);
  }

}
