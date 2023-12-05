import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { register } from 'swiper/element/bundle';
import { MoviesRoutingModule } from './movies-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MoviesPageComponent } from './pages/movies-page/movies-page.component';
import { TopBarLayoutComponent } from './layouts/top-bar-layout/top-bar-layout.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { MovieInformationComponent } from './components/movie-information/movie-information.component';
import { MovieFilterComponent } from './components/movie-filter/movie-filter.component';
import { MovieCarouselComponent } from './components/movie-carousel/movie-carousel.component';
import { SavedMoviesListComponent } from './components/saved-movies-list/saved-movies-list.component';
import { MoviePageComponent } from './pages/movie-page/movie-page.component';
import { SwiperDirective } from './directives/swiper.directive';
import { HoverToShowDetailsDirective } from './directives/hover-to-show-details.directive';
import { moviesReducer } from './store/reducers/movies.reducers';
import { MoviesEffects } from './store/effects/movies.effects';

register();

@NgModule({
  declarations: [
    MoviesPageComponent,
    TopBarLayoutComponent,
    TopBarComponent,
    MovieInformationComponent,
    MovieFilterComponent,
    MovieCarouselComponent,
    SavedMoviesListComponent,
    MoviePageComponent,
    SwiperDirective,
    HoverToShowDetailsDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature('movies', moviesReducer),
    EffectsModule.forFeature([MoviesEffects]),
    MoviesRoutingModule,
    SharedModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class MoviesModule { }
