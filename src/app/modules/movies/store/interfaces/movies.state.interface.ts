import { Movie } from "../../interfaces";

export interface MovieState {
    isLoading: boolean;
    movies: Movie[];
    movieHovered?: Movie;
    movieSelected: MovieSelected;
}

interface MovieSelected {
    movie?: Movie,
    isLoading: boolean;
    error: string | null;
}
