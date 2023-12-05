import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieFilterComponent } from './movie-filter.component';
import { FormsModule } from '@angular/forms';

describe('MovieFilterComponent', () => {
  let component: MovieFilterComponent;
  let fixture: ComponentFixture<MovieFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieFilterComponent],
      imports: [
        FormsModule
      ],
    });
    fixture = TestBed.createComponent(MovieFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit a value when onChange method is executed', () => {
    spyOn(component.filterBy, 'emit');

    component.onChange('title');
    expect(component.filterBy.emit).toHaveBeenCalledWith('title');
  });
});
