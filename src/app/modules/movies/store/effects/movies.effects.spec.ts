import { TestScheduler } from 'rxjs/testing';
import { MoviesEffects } from './movies.effects';
import { Observable, ReplaySubject, of, throwError } from 'rxjs';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import * as MoviesActions from '../actions/movies.actions';
import { Action, Store, StoreModule } from '@ngrx/store';
import { MoviesService } from '../../services/movies.service';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AppState } from 'src/app/interfaces/app.state.interface';
import { Actions } from '@ngrx/effects';
import { Movie } from '../../interfaces';
import { moviesReducer } from '../reducers/movies.reducers';

describe('MoviesEffects', () => {
    let actions$: Observable<any>;
    let effects: MoviesEffects;
    let store: Store;
    let moviesService: jasmine.SpyObj<MoviesService>;

    beforeEach(() => {
        moviesService = jasmine.createSpyObj('MoviesService', ['getMovie', 'getMovies']);

        TestBed.configureTestingModule({
            imports: [
                StoreModule.forRoot({ movies: moviesReducer }), // Importa el reducer de movies
            ],
            providers: [
                MoviesEffects,
                provideMockActions(() => actions$),
                { provide: MoviesService, useValue: moviesService },
            ],
        });

        effects = TestBed.inject(MoviesEffects);
        store = TestBed.inject(Store);
    });

    it('should save movies to local storage when saveMovie action is dispatched', (done) => {
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

        const movies = [{ ...movie }];

        const action = MoviesActions.saveMovie({ movie });
        actions$ = of(action);

        store.dispatch(MoviesActions.getMoviesSuccess({ movies }));

        effects.saveMovie$.subscribe(() => {
            const watchList = JSON.parse(localStorage.getItem('watchList') || '[]');
            const expectedWatchList = movies.filter(({ saved }) => saved).map(({ id }) => id);
            expect(watchList).toEqual(expectedWatchList);
            done();
        });
    });

    it('should save movies to local storage when getMovieSelected action is dispatched', (done) => {
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
            saved: false
        }

        const movies = [{ ...movie }];

        const action = MoviesActions.getMovieSelected({ movieId: 1 });
        actions$ = of(action);
        moviesService.getMovie.and.returnValue(of(movie));

        store.dispatch(MoviesActions.getMoviesSuccess({ movies }));

        spyOn(localStorage, 'getItem').and.returnValue(null);

        effects.getMovieSelected$.subscribe((resultAction) => {
            expect(resultAction).toEqual(MoviesActions.getMovieSelectedSuccess({ movie }));
            done();
        });
    });

    it('should dispatch getMovieSelectedFailure on error during movie retrieval', (done) => {
        const movieId = 1;
        const error = new Error('Movie retrieval error');

        actions$ = of(MoviesActions.getMovieSelected({ movieId }));
        moviesService.getMovie.and.returnValue(throwError(() => error));

        effects.getMovieSelected$.subscribe((resultAction) => {
            expect(resultAction).toEqual(MoviesActions.getMovieSelectedFailure({ error: error.message }));
            done();
        });
    });

    it('should save movies to local storage when getMovies action is dispatched', (done) => {
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
            saved: false
        }

        moviesService.getMovies.and.returnValue(of([movie]));

        actions$ = of(MoviesActions.getMovies());

        effects.getMovies$.subscribe((resultAction) => {
            expect(resultAction).toEqual(MoviesActions.getMoviesSuccess({ movies: [{...movie, saved: true}] }));
            done();
        });
    });

    it('should save movies to local storage when getMovies action is dispatched with local storage null', (done) => {
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
            saved: false
        }

        spyOn(localStorage, 'getItem').and.returnValue(null);
        moviesService.getMovies.and.returnValue(of([movie]));

        actions$ = of(MoviesActions.getMovies());

        effects.getMovies$.subscribe((resultAction) => {
            expect(resultAction).toEqual(MoviesActions.getMoviesSuccess({ movies: [{...movie, saved: false}] }));
            done();
        });
    });
});