import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { PlacesComponent } from "./places/places.component";
import { PlaceComponent } from "./places/place/place.component";
import {
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTabsModule
} from "@angular/material";
import { FormsModule } from "@angular/forms";
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PlaceComponent,
        PlacesComponent,
        
      ],
      imports: [
          FormsModule,
          MatTabsModule,
          MatIconModule,
          MatButtonModule,
          MatDialogModule,
          MatInputModule,
          MatFormFieldModule
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'client'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('client');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to client!');
  }));
});
