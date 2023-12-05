import { Component, EventEmitter, Output } from '@angular/core';
import { MovieFilter } from '../../interfaces';
import { FilterBy } from '../../enums';

@Component({
  selector: 'movies-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.scss']
})
export class MovieFilterComponent {
  @Output() public filterBy: EventEmitter<string> = new EventEmitter<string>();

  public filterSelected: string = '';
  public filters: MovieFilter[] = [
    { name: 'Title', value: FilterBy.title },
    { name: 'Release date', value: FilterBy.releasedDate },
  ];

  public onChange(filterBy: string) {
    this.filterBy.emit(filterBy);
  }
}
