import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import * as MoviesActions from '../../store/actions/movies.actions';
import * as SpinnerActions from '../../../../store/actions/spinner.actions';
import { movieHoveredSelector, moviesAreLoadingSelector, moviesSelector } from '../../store/selectors/movies.selectors';
import { Movie } from '../../interfaces';
import { AppState } from 'src/app/interfaces/app.state.interface';
import { FilterBy } from '../../enums';
import { slideInOutValueChangedAnimation } from 'src/app/modules/shared/animations/animations';

@Component({
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.scss'],
  animations: [slideInOutValueChangedAnimation]
})
export class MoviesPageComponent implements OnInit, OnDestroy {

  private _store = inject(Store<AppState>);

  private _moviesAreLoadingSubscription: Subscription = new Subscription();
  private _moviesSubscription: Subscription = new Subscription();
  private _movieHoveredSubscription: Subscription = new Subscription();

  public movies: Movie[] = [];
  public movieHoveredImage?: string;

  ngOnInit(): void {
    this._moviesAreLoadingSubscription = this._store.select(moviesAreLoadingSelector).subscribe(isLoading => {
      this._store.dispatch(SpinnerActions.showSpinner({ show: isLoading }));
    })

    this._moviesSubscription = this._store.select(moviesSelector).subscribe(movies => {
      this.movies = movies;
    })

    this._movieHoveredSubscription = this._store.select(movieHoveredSelector).subscribe(movie => {
      this.movieHoveredImage = movie?.image;
    })
  }

  ngOnDestroy(): void {
    this._moviesAreLoadingSubscription.unsubscribe();
    this._moviesSubscription.unsubscribe();
    this._movieHoveredSubscription.unsubscribe();
  }

  public onFilterBy(filter: string) {
    if (filter === FilterBy.title) {
      this._store.dispatch(MoviesActions.sortMoviesByTitle());
    }

    if (filter === FilterBy.releasedDate) {
      this._store.dispatch(MoviesActions.sortMoviesByDate());
    }
  }
}
