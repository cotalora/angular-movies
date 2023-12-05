import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as MoviesActions from '../../store/actions/movies.actions';
import * as SpinnerActions from '../../../../store/actions/spinner.actions';
import { movieSelectedErrorSelector, movieSelectedSelector, movieSelectedisLoadingSelector } from '../../store/selectors/movies.selectors';
import { AppState } from 'src/app/interfaces/app.state.interface';
import { Movie } from '../../interfaces';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss']
})
export class MoviePageComponent implements OnInit, OnDestroy {

  private _store = inject(Store<AppState>);
  private _activatedRoute = inject(ActivatedRoute);
  private _router = inject(Router);
  private _sanitizer = inject(DomSanitizer);

  private _movieSelectedisLoadingSubscription: Subscription = new Subscription();
  private _movieSelectedErrorSubscription: Subscription = new Subscription();
  private _paramsSubscription: Subscription = new Subscription();
  private _movieSelectedSubscription: Subscription = new Subscription();

  public movie?: Movie; 
  public safeIframeURL?: SafeResourceUrl;

  ngOnInit(): void {
    this._movieSelectedisLoadingSubscription = this._store.select(movieSelectedisLoadingSelector).subscribe(isLoading => {
      this._store.dispatch(SpinnerActions.showSpinner({ show: isLoading }));
    })

    this._movieSelectedErrorSubscription = this._store.select(movieSelectedErrorSelector).subscribe(error => {
      if (error) { this._router.navigate(['']) }
    })

    this._paramsSubscription = this._activatedRoute.paramMap.subscribe(params => {
      const id = params.get('id') ? parseInt(params.get('id')!) : 0;

      this._store.dispatch(MoviesActions.getMovieSelected({ movieId: id }));
    })

    this._movieSelectedSubscription = this._store.select(movieSelectedSelector).subscribe(movie => {
      this.movie = movie;
      if (movie) {
        this.safeIframeURL = this._sanitizer.bypassSecurityTrustResourceUrl(movie.trailer); // NOSONAR
      }
    })
  }

  ngOnDestroy(): void {
    this._movieSelectedisLoadingSubscription.unsubscribe();
    this._movieSelectedErrorSubscription.unsubscribe();
    this._paramsSubscription.unsubscribe();
    this._movieSelectedSubscription.unsubscribe();
  }

  public addMovieToWatchList() {
    this._store.dispatch(MoviesActions.saveMovie({ movie: this.movie! }));
  }
}
