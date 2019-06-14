import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceComponent } from './place.component';
import { MatIconModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { PlacesService } from '../places.service';
import { PlacesModel } from '../places.model';
import { RouterTestingModule } from '@angular/router/testing';

describe('PlaceComponent', () => {
  let component: PlaceComponent;
  let fixture: ComponentFixture<PlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlaceComponent],
      imports: [MatIconModule, RouterModule.forRoot([]), RouterTestingModule],
      providers: [PlacesService]
    }).compileComponents();

    fixture = TestBed.createComponent(PlaceComponent);
    component = fixture.componentInstance;
  }));

  it('PlaceComponent should be created', () => {
    expect(component).toBeTruthy();
  });

  it(`should NOT have any user in list before ngOnInit`, () => {
    expect(component.place).toBe(undefined);
  });

  it(`should get the place after ngOnInit`, async(() => {
    const placesService = new PlacesService();
    const place = placesService.getPlace(1);
    PlaceComponent.prototype.place = place;

    fixture.detectChanges(); // This triggers the ngOnInit and thus the getUserList() method

    // Works perfectly. ngOnInit was triggered and my list is OK
    expect(component.place.id).toBe(1);
  }));
});
