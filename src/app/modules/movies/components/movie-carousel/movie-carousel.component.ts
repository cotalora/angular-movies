import { Component, Input } from '@angular/core';
import { SwiperOptions } from 'swiper/types';
import { Movie } from '../../interfaces';

@Component({
  selector: 'movies-movie-carousel',
  templateUrl: './movie-carousel.component.html',
  styleUrls: ['./movie-carousel.component.scss']
})
export class MovieCarouselComponent {
  
  @Input() public movies: Movie[] = [];
  
  public swiperConfig: SwiperOptions = {
    spaceBetween: 10,
    slidesPerView: 'auto',
    navigation: true,
    observeSlideChildren: true,
    preventInteractionOnTransition: true,
  }
}
