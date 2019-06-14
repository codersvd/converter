import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceComponent } from './place.component';
import { MatIconModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { PlacesService } from '../places.service';
import { PlacesModel } from '../places.model';

describe('PlaceComponent', () => {
  let component: PlaceComponent;
  let fixture: ComponentFixture<PlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlaceComponent],
      imports: [MatIconModule, RouterModule.forRoot([])],
      providers: [PlacesService]
    }).compileComponents();

    fixture = TestBed.createComponent(PlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    component.place = new PlacesModel(
      Math.floor(Math.random() * 100),
      'Name',
      1
    );
    fixture.whenStable().then(() => {
      expect(component).toBeTruthy();
    });
  });
});
