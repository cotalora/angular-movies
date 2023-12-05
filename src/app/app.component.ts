import { ChangeDetectorRef, Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { spinnerSelector } from './store/selectors/spinner.selectors';
import { AppState } from 'src/app/interfaces/app.state.interface';
import { slideInOutAnimation } from './modules/shared/animations/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [slideInOutAnimation]
})
export class AppComponent implements OnInit, OnDestroy {

  private _store = inject(Store<AppState>);
  private _cdr = inject(ChangeDetectorRef);

  private _spinnerSubscription: Subscription = new Subscription();

  public title = 'angular-movies';
  public showSpinner?: boolean;

  ngOnInit(): void {
    this._spinnerSubscription = this._store.select(spinnerSelector).subscribe(showSpinner => {
      this.showSpinner = showSpinner;
      this._cdr.detectChanges();
    })
  }

  ngOnDestroy(): void {
    this._spinnerSubscription.unsubscribe();
  }
}
