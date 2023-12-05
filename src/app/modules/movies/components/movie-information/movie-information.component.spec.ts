import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieInformationComponent } from './movie-information.component';
import { provideMockStore } from '@ngrx/store/testing';
import { AppState } from 'src/app/interfaces/app.state.interface';
import { JoinArrayByPipe } from 'src/app/modules/shared/pipes/join-array-by.pipe';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('MovieInformationComponent', () => {
  let component: MovieInformationComponent;
  let fixture: ComponentFixture<MovieInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        MovieInformationComponent
      ],
      providers: [provideMockStore({
        initialState: {
          movies: {
            movieHovered: {
              id: 1,
              title: 'test title',
              description: 'test description',
              duration: '2h',
              genre: ['genre 1', 'genre 2'],
              image: 'test image',
              rating: 1,
              releasedDate: new Date(),
              trailer: 'test trailer',
              saved: true
            }
          },
          spinner: {
            show: false
          }
        } as AppState
      })],
      imports: [
        BrowserAnimationsModule,
        SharedModule
      ]
    });
    fixture = TestBed.createComponent(MovieInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
