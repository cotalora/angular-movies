import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBarComponent } from './top-bar.component';
import { SavedMoviesListComponent } from '../saved-movies-list/saved-movies-list.component';
import { provideMockStore } from '@ngrx/store/testing';
import { AppState } from 'src/app/interfaces/app.state.interface';

describe('TopBarComponent', () => {
  let component: TopBarComponent;
  let fixture: ComponentFixture<TopBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TopBarComponent,
        SavedMoviesListComponent
      ],
      providers: [provideMockStore({
        initialState: {
          spinner: {
            show: false
          }
        } as AppState
      })],
    });
    fixture = TestBed.createComponent(TopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
