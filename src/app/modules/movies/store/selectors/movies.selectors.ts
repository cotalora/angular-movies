import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/interfaces/app.state.interface";


export const selectMovieFeature = (state: AppState) => state.movies;

export const moviesSelector = createSelector(selectMovieFeature, state => state.movies);
export const moviesAreLoadingSelector = createSelector(selectMovieFeature, state => state.isLoading);

export const movieSelectedSelector = createSelector(selectMovieFeature, state => state.movieSelected.movie);
export const movieSelectedisLoadingSelector = createSelector(selectMovieFeature, state => state.movieSelected.isLoading);
export const movieSelectedErrorSelector = createSelector(selectMovieFeature, state => state.movieSelected.error);

export const movieHoveredSelector = createSelector(selectMovieFeature, state => state.movieHovered);
