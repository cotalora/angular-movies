import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedMoviesListComponent } from './saved-movies-list.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AppState } from 'src/app/interfaces/app.state.interface';
import * as MoviesActions from '../../store/actions/movies.actions';
import { Movie } from '../../interfaces';

describe('SavedMoviesListComponent', () => {
  let component: SavedMoviesListComponent;
  let fixture: ComponentFixture<SavedMoviesListComponent>;
  let store: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SavedMoviesListComponent],
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
    });
    fixture = TestBed.createComponent(SavedMoviesListComponent);
    store = TestBed.inject(MockStore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should only execute onClickShowWatchListButton and change showWatchList value to true', () => {
    component.onClickShowWatchListButton();
    expect(component.showWatchList).toBeTrue();
  });

  it('should only execute handleClickOutside and change showWatchList value to false', () => {
    component.handleClickOutside();
    expect(component.showWatchList).toBeFalse();
  });

  it('should exec dispatch with saveMovie action when removeMovieFromWatchList method is executed', () => {
    const dispatchSpy = spyOn(store, 'dispatch').and.callThrough();

    const movie: Movie = {
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

    component.removeMovieFromWatchList(movie);

    expect(dispatchSpy).toHaveBeenCalledWith(MoviesActions.saveMovie({ movie }));
  });
});

describe('SavedMoviesListComponent without movies', () => {
  let component: SavedMoviesListComponent;
  let fixture: ComponentFixture<SavedMoviesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SavedMoviesListComponent],
      providers: [provideMockStore({
        initialState: {
          movies: {
            movies: [],
            isLoading: false,
            error: null,
            movieSelected: {
              movie: undefined,
              isLoading: false,
              error: null
            }
          },
          spinner: {
            show: false
          }
        } as AppState
      })],
    });
    fixture = TestBed.createComponent(SavedMoviesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should only execute onClickShowWatchListButton if there is none', () => {
    component.onClickShowWatchListButton();
    expect(component).toBeTruthy();
  });
});