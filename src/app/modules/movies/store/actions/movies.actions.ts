import { createAction, props } from '@ngrx/store';
import { Movie } from '../../interfaces';

export const getMovies = createAction('[Movies] Get Movies');
export const getMoviesSuccess = createAction(
    '[Movies] Get Movies success',
    props<{ movies: Movie[] }>()
);

export const getMovieSelected = createAction(
    '[Movies] Get Movie Selected',
    props<{ movieId: number }>()
);
export const getMovieSelectedSuccess = createAction(
    '[Movies] Get Movie Selected success',
    props<{ movie: Movie }>()
);
export const getMovieSelectedFailure = createAction(
    '[Movies] Get Movie Selected failure',
    props<{ error: string }>()
);
export const cleanMovieSelected = createAction('[Movies] Clean Movie Selected');

export const sortMoviesByTitle = createAction('[Movies] Sort Movies by Title');
export const sortMoviesByDate = createAction('[Movies] Sort Movies by Date');

export const getMovieHovered = createAction(
    '[Movie] Get Movie hovered',
    props<{ movie: Movie }>()
);
export const saveMovie = createAction(
    '[Movie] Save Movie',
    props<{ movie: Movie }>()
);
