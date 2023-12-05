import { TestBed, fakeAsync, tick } from '@angular/core/testing';

import { MoviesService } from './movies.service';
import { take } from 'rxjs';
import { movies } from '../constants/movies';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get the movies', fakeAsync(() => {
    service.getMovies()
      .pipe(take(1))
      .subscribe((response) => {
        expect(response).toEqual(movies.map(movie => ({ ...movie, saved: false })));
      })
    tick(1000);
  }));

  it('should get a specific movie', fakeAsync(() => {

    const movie = movies.find(movie => movie.id === 1)!;

    service.getMovie(1)
      .pipe(take(1))
      .subscribe((response) => {
        expect(response).toEqual(movie);
      })
    tick(1000);
  }));

  it('should get a specific movie', () => {
    const movie = movies.find(movie => movie.id === 1)!;

    service.getMovie(99)
      .pipe(take(1))
      .subscribe(
        () => { },
        (err) => {
          expect(err).toEqual({ message: 'Movie was not found' })
        }
      )
  });
});
