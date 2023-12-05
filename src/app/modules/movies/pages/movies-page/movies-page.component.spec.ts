import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesPageComponent } from './movies-page.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AppState } from 'src/app/interfaces/app.state.interface';
import { MovieInformationComponent } from '../../components/movie-information/movie-information.component';
import { MovieFilterComponent } from '../../components/movie-filter/movie-filter.component';
import { MovieCarouselComponent } from '../../components/movie-carousel/movie-carousel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { register } from 'swiper/element/bundle';
import { SwiperDirective } from '../../directives/swiper.directive';
import { HoverToShowDetailsDirective } from '../../directives/hover-to-show-details.directive';
import { FilterBy } from '../../enums';
import * as MoviesActions from '../../store/actions/movies.actions';

register();

describe('MoviesPageComponent', () => {
  let component: MoviesPageComponent;
  let fixture: ComponentFixture<MoviesPageComponent>;
  let store: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        MoviesPageComponent,
        MovieInformationComponent,
        MovieFilterComponent,
        MovieCarouselComponent,
        SwiperDirective,
        HoverToShowDetailsDirective
      ],
      providers: [provideMockStore({
        initialState: {
          movies: {
            movies: [{
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
            }]
          },
          spinner: {
            show: false
          }
        } as AppState
      })],
      imports: [
        BrowserAnimationsModule,
        FormsModule,
      ]
    });
    fixture = TestBed.createComponent(MoviesPageComponent);
    store = TestBed.inject(MockStore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should exec dispatch with sortMoviesByTitle action when onFilterBy method is executed', () => {
    const dispatchSpy = spyOn(store, 'dispatch').and.callThrough();
    component.onFilterBy(FilterBy.title);

    expect(dispatchSpy).toHaveBeenCalledWith(MoviesActions.sortMoviesByTitle());
  });

  it('should exec dispatch with sortMoviesByDate action when onFilterBy method is executed', () => {
    const dispatchSpy = spyOn(store, 'dispatch').and.callThrough();
    component.onFilterBy(FilterBy.releasedDate);

    expect(dispatchSpy).toHaveBeenCalledWith(MoviesActions.sortMoviesByDate());
  });
});
