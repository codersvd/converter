import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PlacesModel} from '../places.model';
import { ActivatedRoute, Params } from "@angular/router";
import { PlacesService } from "../places.service";

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.less']
})
export class PlaceComponent implements OnInit {
  place: PlacesModel;
  @Output() itemDeleted = new EventEmitter<PlacesModel>();

  constructor(private route: ActivatedRoute, private placesService: PlacesService ) {
  }

  ngOnInit() {
    this.place = this.placesService.getPlace(this.route.snapshot.params["id"]);
    
    this.route.params.subscribe((params: Params) => {
        this.placesService.placeSelected = params["id"];
        this.place = this.placesService.getPlace(params["id"]);
    });
  }

}
