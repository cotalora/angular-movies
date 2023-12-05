import { Injectable, inject } from '@angular/core';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as MoviesActions from '../actions/movies.actions';
import { moviesSelector } from '../selectors/movies.selectors';
import { MoviesService } from '../../services/movies.service';
import { AppState } from 'src/app/interfaces/app.state.interface';
import { Movie } from '../../interfaces';

@Injectable()
export class MoviesEffects {

    public _moviesService$ = inject(MoviesService);
    public _actions$ = inject(Actions);
    private _store = inject(Store<AppState>)

    getMovies$ = createEffect(() =>
        this._actions$.pipe(
            ofType(MoviesActions.getMovies),
            mergeMap(() => {
                return this._moviesService$.getMovies().pipe(
                    map((movies) => {
                        const savedMovies: number[] = JSON.parse(localStorage.getItem('watchList') ?? '[]');
                        const restoredMovies = movies.map(movie => ({
                            ...movie,
                            saved: savedMovies.includes(movie.id)
                        }))

                        return MoviesActions.getMoviesSuccess({ movies: restoredMovies })
                    })
                );
            })
        )
    );

    getMovieSelected$ = createEffect(() =>
        this._actions$.pipe(
            ofType(MoviesActions.getMovieSelected),
            mergeMap(({ movieId }) => {
                return this._moviesService$.getMovie(movieId).pipe(
                    map((movie) => {
                        const savedMovies: number[] = JSON.parse(localStorage.getItem('watchList') ?? '[]');
                        const restoredMovie: Movie = {
                            ...movie,
                            saved: savedMovies.includes(movie.id)
                        }
                        
                        return MoviesActions.getMovieSelectedSuccess({ movie: restoredMovie })
                    }),
                    catchError((error) =>
                        of(MoviesActions.getMovieSelectedFailure({ error: error.message }))
                    )
                );
            })
        )
    );

    saveMovie$ = createEffect(() =>
        this._actions$.pipe(
            ofType(MoviesActions.saveMovie),
            mergeMap(() => {
                return this._store.select(moviesSelector)
            }),
            tap((movies) => {
                const savedMovies = movies.filter(({ saved }) => saved).map(({ id }) => id);
                localStorage.setItem('watchList', JSON.stringify(savedMovies));
            })
        ),
        { dispatch: false }
    );
}
