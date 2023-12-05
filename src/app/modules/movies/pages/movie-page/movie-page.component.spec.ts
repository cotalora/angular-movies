import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviePageComponent } from './movie-page.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AppState } from 'src/app/interfaces/app.state.interface';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';
import * as MoviesActions from '../../store/actions/movies.actions';

describe('MoviePageComponent', () => {
  let component: MoviePageComponent;
  let fixture: ComponentFixture<MoviePageComponent>;
  let store: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoviePageComponent],
      providers: [
        provideMockStore({
          initialState: {
            movies: {
              movieSelected: {
                movie: {
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
                },
                isLoading: false,
                error: null
              }
            },
            spinner: {
              show: false
            }
          } as AppState
        }),
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of(convertToParamMap({ id: '1' }))
          },
        },
      ],
      imports: [
        RouterTestingModule,
        SharedModule
      ]
    });
    fixture = TestBed.createComponent(MoviePageComponent);
    store = TestBed.inject(MockStore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should exec dispatch with saveMovie action when addMovieToWatchList method is executed', () => {
    const dispatchSpy = spyOn(store, 'dispatch').and.callThrough();
    component.addMovieToWatchList();

    expect(dispatchSpy).toHaveBeenCalledWith(MoviesActions.saveMovie({ movie: component.movie! }));
  });
});

describe('MoviePageComponent without params', () => {
  let component: MoviePageComponent;
  let fixture: ComponentFixture<MoviePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoviePageComponent],
      providers: [
        provideMockStore({
          initialState: {
            movies: {
              movieSelected: {
                movie: {
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
                },
                isLoading: false,
                error: null
              }
            },
            spinner: {
              show: false
            }
          } as AppState
        })
      ],
      imports: [
        RouterTestingModule,
        SharedModule
      ]
    });
    fixture = TestBed.createComponent(MoviePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('MoviePageComponent with error', () => {
  let component: MoviePageComponent;
  let fixture: ComponentFixture<MoviePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoviePageComponent],
      providers: [
        provideMockStore({
          initialState: {
            movies: {
              movieSelected: {
                movie: undefined,
                isLoading: false,
                error: 'Error'
              }
            },
            spinner: {
              show: false
            }
          } as AppState
        }),
      ],
      imports: [
        RouterTestingModule,
        SharedModule
      ]
    });
    fixture = TestBed.createComponent(MoviePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

