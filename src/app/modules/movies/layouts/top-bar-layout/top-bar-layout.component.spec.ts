import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBarLayoutComponent } from './top-bar-layout.component';
import { TopBarComponent } from '../../components/top-bar/top-bar.component';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { SavedMoviesListComponent } from '../../components/saved-movies-list/saved-movies-list.component';
import { provideMockStore } from '@ngrx/store/testing';
import { AppState } from 'src/app/interfaces/app.state.interface';

describe('TopBarLayoutComponent', () => {
  let component: TopBarLayoutComponent;
  let fixture: ComponentFixture<TopBarLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TopBarLayoutComponent,
        TopBarComponent,
        SavedMoviesListComponent
      ],
      imports: [
        RouterModule,
        RouterTestingModule
      ],
      providers: [provideMockStore({
        initialState: {
          spinner: {
            show: false
          }
        } as AppState
      })],
    });
    fixture = TestBed.createComponent(TopBarLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
