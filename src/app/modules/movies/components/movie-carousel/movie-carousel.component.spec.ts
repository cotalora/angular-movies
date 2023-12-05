import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCarouselComponent } from './movie-carousel.component';
import { register } from 'swiper/element/bundle';
import { SwiperDirective } from '../../directives/swiper.directive';

register();

describe('MovieCarouselComponent', () => {
  let component: MovieCarouselComponent;
  let fixture: ComponentFixture<MovieCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        MovieCarouselComponent,
        SwiperDirective,
      ]
    });
    fixture = TestBed.createComponent(MovieCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
