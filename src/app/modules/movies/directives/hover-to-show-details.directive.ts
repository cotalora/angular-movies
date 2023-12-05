import { Directive, ElementRef, HostListener, Input, Renderer2, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as MoviesActions from '../../movies/store/actions/movies.actions';
import { Movie } from '../interfaces';
import { AppState } from 'src/app/interfaces/app.state.interface';

@Directive({
  selector: '[hoverToShowDetails]'
})
export class HoverToShowDetailsDirective {

  @Input() movie!: Movie;

  private _store = inject(Store<AppState>);
  private _router = inject(Router);
  
  private _addedDiv: HTMLDivElement | null = null;

  constructor(private _el: ElementRef, private _renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this._addDiv();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this._removeDiv();
  }

  private _addDiv() {
    this._addedDiv = this._renderer.createElement('div');
    this._renderer.addClass(this._addedDiv, 'hover-div');

    this._addAddToWatchListButtonToAddedDiv();
    this._addSeeMoreButtonToAddedDiv();

    this._renderer.appendChild(this._el.nativeElement, this._addedDiv);

    this._selectMovie();
  }

  private _removeDiv() {
    if (this._addedDiv) {
      this._renderer.removeChild(this._el.nativeElement, this._addedDiv);
      this._addedDiv = null;
    }
  }

  private _addAddToWatchListButtonToAddedDiv() {
    const watchListButton: HTMLButtonElement = this._renderer.createElement('button');
    watchListButton.innerHTML = `${ !this.movie.saved ? 'Add to' : 'Remove from' } Watchlist`;
    watchListButton.onclick = () => {
      this._addMovieToWatchList();
    }
    this._renderer.addClass(watchListButton, 'watchlist-button');
    this._renderer.appendChild(this._addedDiv, watchListButton);
  }

  private _addSeeMoreButtonToAddedDiv() {
    const seeMoreButton = this._renderer.createElement('button');
    seeMoreButton.innerHTML = 'See more';
    seeMoreButton.onclick = () => {
      this._navigateToMovieDetails();
    }
    this._renderer.addClass(seeMoreButton, 'see-more-button');
    this._renderer.appendChild(this._addedDiv, seeMoreButton);
  }

  private _selectMovie() {
    this._store.dispatch(MoviesActions.getMovieHovered({ movie: this.movie }));
  }

  private _addMovieToWatchList() {
    this._store.dispatch(MoviesActions.saveMovie({ movie: this.movie }));
  }

  private _navigateToMovieDetails() {
    this._store.dispatch(MoviesActions.cleanMovieSelected())
    this._router.navigate([`/details/${this.movie.id}`])
  }
}
