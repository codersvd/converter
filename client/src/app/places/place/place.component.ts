import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Place} from './place';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.less']
})
export class PlaceComponent implements OnInit {
  @Input() place: Place;
  @Output() itemDeleted = new EventEmitter<Place>();

  constructor(private router: ActivatedRoute ) {
  }

  ngOnInit() {
      this.router.snapshot.params.subscribe(data => {
          console.log(data);
          this.place = data.id;
      })
  }

}
