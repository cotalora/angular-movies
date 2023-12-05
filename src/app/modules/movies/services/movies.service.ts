import { Injectable } from '@angular/core';
import { Observable, delay, map, of, throwError } from 'rxjs';
import { movies } from '../constants/movies';
import { Movie } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  
  public getMovies(): Observable<Movie[]> {
    return of(movies).pipe(
      map(movies => (movies.map(movie => ({ ...movie, saved: false })))),
      delay(500)
    );
  }
  
  public getMovie(movieId: number): Observable<Movie> {
    const movieIsPresent = movies.find(({ id }) => id === movieId);
    
    if (!movieIsPresent) {
      return throwError(() => ({ message: 'Movie was not found' }))
    }

    return of(movieIsPresent).pipe(
      delay(500)
    );
  }
}
