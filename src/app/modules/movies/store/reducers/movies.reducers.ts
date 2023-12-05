import { createReducer, on } from '@ngrx/store';
import * as MoviesActions from '../actions/movies.actions';
import { MovieState } from '../interfaces/movies.state.interface';

export const initialState: MovieState = {
    isLoading: false,
    movies: [],
    movieHovered: undefined,
    movieSelected: {
        isLoading: false,
        movie: undefined,
        error: null
    }
};

export const moviesReducer = createReducer(
    initialState,
    on(MoviesActions.getMovies, (state) => ({ ...state, isLoading: true })),
    on(MoviesActions.getMoviesSuccess, (state, action) => ({
        ...state,
        isLoading: false,
        movies: action.movies,
        movieHovered: action.movies[0]
    })),

    on(MoviesActions.getMovieSelected, (state) => ({ 
        ...state,
        movieSelected: { ...state.movieSelected, isLoading: true } 
    })),

    on(MoviesActions.getMovieSelectedSuccess, (state, action) => ({
        ...state,
        movieSelected: { 
            ...state.movieSelected, 
            isLoading: false,
            movie: action.movie
        }
    })),
    on(MoviesActions.getMovieSelectedFailure, (state, action) => ({
        ...state,
        movieSelected: { 
            ...state.movieSelected, 
            isLoading: false,
            error: action.error,
        }
    })),

    on(MoviesActions.cleanMovieSelected, (state, action) => ({
        ...state,
        movieSelected: {
            movie: undefined,
            error: null,
            isLoading: false
        }
    })),

    on(MoviesActions.sortMoviesByTitle, (state) => ({
        ...state,
        movies: [...state.movies].sort((a, b) => {
            if (a.title < b.title) {
                return -1;
            }
            if (a.title > b.title) {
                return 1;
            }
            return 0;
        })
    })),
    on(MoviesActions.sortMoviesByDate, (state) => ({
        ...state,
        movies: [...state.movies].sort((a, b) => {
            return a.releasedDate.getTime() - b.releasedDate.getTime();
        })
    })),

    on(MoviesActions.getMovieHovered, (state, action) => ({
        ...state,
        movieHovered: state.movieHovered?.id === action.movie.id ? state.movieHovered : action.movie
    })),

    on(MoviesActions.saveMovie, (state, action) => ({
        ...state,
        movies: state.movies.map(movie => {
            if (movie.id === action.movie.id) {
                return {
                    ...movie,
                    saved: !movie.saved
                }
            }

            return movie;
        }),
        movieSelected: { 
            ...state.movieSelected, 
            movie: {
                ...state.movieSelected.movie!,
                saved: !action.movie.saved
            }
        }
    }))
);
