import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceComponent } from './place.component';
import { MatIconModule } from "@angular/material";
import { PlacesModel } from "../place";

describe( 'PlaceComponent', () => {
    let component: PlaceComponent;
    let fixture: ComponentFixture<PlaceComponent>;
    
    beforeEach( async( () => {
        TestBed.configureTestingModule( {
            declarations: [ PlaceComponent ],
            imports: [
                MatIconModule
            ]
        } )
        .compileComponents();
    } ) );
    
    beforeEach( () => {
        fixture = TestBed.createComponent( PlaceComponent );
        component = fixture.componentInstance;
        fixture.detectChanges();
    } );
    
    it( 'should create', () => {
        expect( component ).toBeTruthy();
    } );
} );
