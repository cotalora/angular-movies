import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { movieHoveredSelector } from '../../store/selectors/movies.selectors';
import { AppState } from 'src/app/interfaces/app.state.interface';
import { Movie } from '../../interfaces';
import { slideInOutValueChangedAnimation } from 'src/app/modules/shared/animations/animations';

@Component({
  selector: 'movies-movie-information',
  templateUrl: './movie-information.component.html',
  styleUrls: ['./movie-information.component.scss'],
  animations: [slideInOutValueChangedAnimation]
})
export class MovieInformationComponent implements OnInit, OnDestroy {

  private _store = inject(Store<AppState>);

  private _movieHoveredSubscription: Subscription = new Subscription();

  public movie?: Movie; 

  ngOnInit(): void {
    this._movieHoveredSubscription = this._store.select(movieHoveredSelector).subscribe(movie => {
      this.movie = movie;
    })
  }

  ngOnDestroy(): void {
    this._movieHoveredSubscription.unsubscribe();
  }
}
