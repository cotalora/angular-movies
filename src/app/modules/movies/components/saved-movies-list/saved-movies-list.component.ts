import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as MoviesActions from '../../../movies/store/actions/movies.actions';
import { moviesSelector } from '../../store/selectors/movies.selectors';
import { AppState } from 'src/app/interfaces/app.state.interface';
import { Movie } from '../../interfaces';
import { slideInOutAnimation } from 'src/app/modules/shared/animations/animations';

@Component({
  selector: 'movies-saved-movies-list',
  templateUrl: './saved-movies-list.component.html',
  styleUrls: ['./saved-movies-list.component.scss'],
  animations: [slideInOutAnimation]
})
export class SavedMoviesListComponent implements OnInit, OnDestroy {

  private _store = inject(Store<AppState>);

  private _movieSavedSubscription: Subscription = new Subscription();

  public moviesSaved: Movie[] = [];
  public showWatchList: boolean = false;

  ngOnInit(): void {
    this._movieSavedSubscription = this._store.select(moviesSelector).subscribe(movies => {
      this.moviesSaved = movies.filter(movie => movie.saved);

      if (this.moviesSaved.length === 0) { this.showWatchList = false }
    })

    this._store.dispatch(MoviesActions.getMovies());
  }

  ngOnDestroy(): void {
    this._movieSavedSubscription.unsubscribe();
  }

  public onClickShowWatchListButton() {
    if (this.moviesSaved.length === 0) return;

    this.showWatchList = true;
  }

  public removeMovieFromWatchList(movie: Movie) {
    this._store.dispatch(MoviesActions.saveMovie({ movie }));
  }

  public handleClickOutside() { this.showWatchList = false; }
}
