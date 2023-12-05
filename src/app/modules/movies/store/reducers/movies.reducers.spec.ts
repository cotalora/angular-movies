import { MovieState } from '../interfaces/movies.state.interface';
import { moviesReducer } from './movies.reducers';
import * as MoviesActions from '../actions/movies.actions';
import { Movie } from '../../interfaces';

describe('Reducer: Movies', () => {

    it('should have initial state of getMovies', () => {
        const expected: MovieState = {
            isLoading: true,
            movies: [],
            movieSelected: {
                movie: undefined,
                isLoading: false,
                error: null
            },
            movieHovered: undefined
        };
        expect(moviesReducer(undefined, MoviesActions.getMovies())).toEqual(expected);
    });

    it('should have initial state of getMoviesSuccess', () => {
        const expected: MovieState = {
            isLoading: false,
            movies: [],
            movieSelected: {
                movie: undefined,
                isLoading: false,
                error: null
            },
            movieHovered: undefined
        };
        expect(moviesReducer(undefined, MoviesActions.getMoviesSuccess({ movies: [] }))).toEqual(expected);
    });

    it('should have initial state of getMovieSelected', () => {
        const expected: MovieState = {
            isLoading: false,
            movies: [],
            movieSelected: {
                movie: undefined,
                isLoading: true,
                error: null
            },
            movieHovered: undefined
        };
        expect(moviesReducer(undefined, MoviesActions.getMovieSelected({ movieId: 1 }))).toEqual(expected);
    });

    it('should have initial state of getMovieSelectedSuccess', () => {
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

        const expected: MovieState = {
            isLoading: false,
            movies: [],
            movieSelected: {
                movie: movie,
                isLoading: false,
                error: null
            },
            movieHovered: undefined
        };
        expect(moviesReducer(undefined, MoviesActions.getMovieSelectedSuccess({ movie }))).toEqual(expected);
    });

    it('should have initial state of getMovieSelectedFailure', () => {
        const expected: MovieState = {
            isLoading: false,
            movies: [],
            movieSelected: {
                movie: undefined,
                isLoading: false,
                error: ''
            },
            movieHovered: undefined
        };
        expect(moviesReducer(undefined, MoviesActions.getMovieSelectedFailure({ error: '' }))).toEqual(expected);
    });

    it('should have initial state of cleanMovieSelected', () => {
        const expected: MovieState = {
            isLoading: false,
            movies: [],
            movieSelected: {
                movie: undefined,
                isLoading: false,
                error: null
            },
            movieHovered: undefined
        };
        expect(moviesReducer(undefined, MoviesActions.cleanMovieSelected())).toEqual(expected);
    });

    it('should have initial state of sortMoviesByTitle', () => {
        const expected: MovieState = {
            isLoading: false,
            movies: [
                {
                    id: 2,
                    title: 'A test title',
                    description: 'test description',
                    duration: '2h',
                    genre: ['genre 1', 'genre 2'],
                    image: 'test image',
                    rating: 1,
                    releasedDate: new Date(),
                    trailer: 'test trailer',
                    saved: true
                },
                {
                    id: 3,
                    title: 'B test title',
                    description: 'test description',
                    duration: '2h',
                    genre: ['genre 1', 'genre 2'],
                    image: 'test image',
                    rating: 1,
                    releasedDate: new Date(),
                    trailer: 'test trailer',
                    saved: true
                },
                {
                    id: 4,
                    title: 'B test title',
                    description: 'test description',
                    duration: '2h',
                    genre: ['genre 1', 'genre 2'],
                    image: 'test image',
                    rating: 1,
                    releasedDate: new Date(),
                    trailer: 'test trailer',
                    saved: true
                },
                {
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
            ],
            movieSelected: {
                movie: undefined,
                isLoading: false,
                error: null
            },
            movieHovered: undefined
        };

        const state: MovieState = {
            isLoading: false,
            movies: [
                {
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
                {
                    id: 2,
                    title: 'A test title',
                    description: 'test description',
                    duration: '2h',
                    genre: ['genre 1', 'genre 2'],
                    image: 'test image',
                    rating: 1,
                    releasedDate: new Date(),
                    trailer: 'test trailer',
                    saved: true
                },
                {
                    id: 3,
                    title: 'B test title',
                    description: 'test description',
                    duration: '2h',
                    genre: ['genre 1', 'genre 2'],
                    image: 'test image',
                    rating: 1,
                    releasedDate: new Date(),
                    trailer: 'test trailer',
                    saved: true
                },
                {
                    id: 4,
                    title: 'B test title',
                    description: 'test description',
                    duration: '2h',
                    genre: ['genre 1', 'genre 2'],
                    image: 'test image',
                    rating: 1,
                    releasedDate: new Date(),
                    trailer: 'test trailer',
                    saved: true
                },
            ],
            movieSelected: {
                movie: undefined,
                isLoading: false,
                error: null
            },
            movieHovered: undefined
        };
        expect(moviesReducer(state, MoviesActions.sortMoviesByTitle())).toEqual(expected);
    });

    it('should have initial state of sortMoviesByDate', () => {
        const expected: MovieState = {
            isLoading: false,
            movies: [
                {
                    id: 1,
                    title: 'test title',
                    description: 'test description',
                    duration: '2h',
                    genre: ['genre 1', 'genre 2'],
                    image: 'test image',
                    rating: 1,
                    releasedDate: new Date('12/05/2023'),
                    trailer: 'test trailer',
                    saved: true
                },
                {
                    id: 2,
                    title: 'A test title',
                    description: 'test description',
                    duration: '2h',
                    genre: ['genre 1', 'genre 2'],
                    image: 'test image',
                    rating: 1,
                    releasedDate: new Date('12/05/2023'),
                    trailer: 'test trailer',
                    saved: true
                },
                {
                    id: 3,
                    title: 'B test title',
                    description: 'test description',
                    duration: '2h',
                    genre: ['genre 1', 'genre 2'],
                    image: 'test image',
                    rating: 1,
                    releasedDate: new Date('12/05/2023'),
                    trailer: 'test trailer',
                    saved: true
                },
                {
                    id: 4,
                    title: 'B test title',
                    description: 'test description',
                    duration: '2h',
                    genre: ['genre 1', 'genre 2'],
                    image: 'test image',
                    rating: 1,
                    releasedDate: new Date('12/05/2023'),
                    trailer: 'test trailer',
                    saved: true
                }
            ],
            movieSelected: {
                movie: undefined,
                isLoading: false,
                error: null
            },
            movieHovered: undefined
        };

        const state: MovieState = {
            isLoading: false,
            movies: [
                {
                    id: 1,
                    title: 'test title',
                    description: 'test description',
                    duration: '2h',
                    genre: ['genre 1', 'genre 2'],
                    image: 'test image',
                    rating: 1,
                    releasedDate: new Date('12/05/2023'),
                    trailer: 'test trailer',
                    saved: true
                },
                {
                    id: 2,
                    title: 'A test title',
                    description: 'test description',
                    duration: '2h',
                    genre: ['genre 1', 'genre 2'],
                    image: 'test image',
                    rating: 1,
                    releasedDate: new Date('12/05/2023'),
                    trailer: 'test trailer',
                    saved: true
                },
                {
                    id: 3,
                    title: 'B test title',
                    description: 'test description',
                    duration: '2h',
                    genre: ['genre 1', 'genre 2'],
                    image: 'test image',
                    rating: 1,
                    releasedDate: new Date('12/05/2023'),
                    trailer: 'test trailer',
                    saved: true
                },
                {
                    id: 4,
                    title: 'B test title',
                    description: 'test description',
                    duration: '2h',
                    genre: ['genre 1', 'genre 2'],
                    image: 'test image',
                    rating: 1,
                    releasedDate: new Date('12/05/2023'),
                    trailer: 'test trailer',
                    saved: true
                },
            ],
            movieSelected: {
                movie: undefined,
                isLoading: false,
                error: null
            },
            movieHovered: undefined
        };
        expect(moviesReducer(state, MoviesActions.sortMoviesByDate())).toEqual(expected);
    });

    it('should have initial state of getMovieHovered', () => {
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

        const expected: MovieState = {
            isLoading: false,
            movies: [],
            movieSelected: {
                movie: undefined,
                isLoading: false,
                error: null
            },
            movieHovered: movie
        };
        expect(moviesReducer(undefined, MoviesActions.getMovieHovered({ movie }))).toEqual(expected);
    });
    
    it('should have initial state of getMovieHovered with same state', () => {
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

        const expected: MovieState = {
            isLoading: false,
            movies: [],
            movieSelected: {
                movie: undefined,
                isLoading: false,
                error: null
            },
            movieHovered: movie
        };
        const state: MovieState = {
            isLoading: false,
            movies: [],
            movieSelected: {
                movie: undefined,
                isLoading: false,
                error: null
            },
            movieHovered: movie
        };
        expect(moviesReducer(state, MoviesActions.getMovieHovered({ movie }))).toEqual(expected);
    });

    it('should have initial state of saveMovie', () => {
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
        
        const expected: MovieState = {
            isLoading: false,
            movies: [
                {
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
                },
                {
                    id: 2,
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
            ],
            movieSelected: {
                movie: {...movie, saved: false},
                isLoading: false,
                error: null
            },
            movieHovered: undefined
        };
        const state: MovieState = {
            isLoading: false,
            movies: [
                {
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
                {
                    id: 2,
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
            ],
            movieSelected: {
                movie: movie,
                isLoading: false,
                error: null
            },
            movieHovered: undefined
        };
        expect(moviesReducer(state, MoviesActions.saveMovie({ movie }))).toEqual(expected);
    });
});
