import { MovieState } from "../modules/movies/store/interfaces/movies.state.interface";
import { SpinnerState } from "../store/interfaces/spinner.state.interface";

export interface AppState {
    movies: MovieState,
    spinner: SpinnerState,
}
