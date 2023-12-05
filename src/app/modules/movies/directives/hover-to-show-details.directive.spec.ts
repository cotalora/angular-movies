import { Component } from '@angular/core';
import { HoverToShowDetailsDirective } from './hover-to-show-details.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Movie } from '../interfaces';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AppState } from 'src/app/interfaces/app.state.interface';
import * as MoviesActions from '../store/actions/movies.actions';

@Component({
  template: `
    <div>
      <div id="element" hoverToShowDetails [movie]='movie'>ELEMENT TEST</div>
    </div>
  `
})
class TestComponent {
  public movie: Movie = {
    id: 1,
    title: 'test title',
    description: 'test description',
    duration: '2h',
    genre: ['genre 1', 'genre 2'],
    image: 'test image',
    rating: 1,
    releasedDate: new Date(),
    trailer: 'test trailer',
    saved: true
  }
}

describe('HoverToShowDetailsDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestComponent, HoverToShowDetailsDirective],
      imports: [

      ],
      providers: [provideMockStore({
        initialState: {
          movies: {
            movies: [{
              id: 1,
              title: 'test title',
              description: 'test description',
              duration: '2h',
              genre: ['genre 1', 'genre 2'],
              image: 'test image',
              rating: 1,
              releasedDate: new Date(),
              trailer: 'test trailer',
              saved: true
            }]
          },
          spinner: {
            show: false
          }
        } as AppState
      })],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    store = TestBed.inject(MockStore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should add element to div container and remove later', () => {
    const divElementContainer: HTMLElement = fixture.debugElement.nativeElement.querySelector('#element');
    divElementContainer.dispatchEvent(new MouseEvent('mouseenter'));

    const hoverDiv: HTMLElement = fixture.debugElement.nativeElement.querySelector('.hover-div');
    expect(hoverDiv).toBeTruthy();

    divElementContainer.dispatchEvent(new MouseEvent('mouseleave'));
  });

  it('should exec dispatch with saveMovie action when event click of watch list button is executed', () => {
    const dispatchSpy = spyOn(store, 'dispatch').and.callThrough();
    const divElementContainer: HTMLElement = fixture.debugElement.nativeElement.querySelector('#element');
    divElementContainer.dispatchEvent(new MouseEvent('mouseenter'));

    const button: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('.watchlist-button');
    button.click();

    expect(dispatchSpy).toHaveBeenCalled();
  });

  it('should exec dispatch with cleanMovieSelected action when event click of see more button is executed', () => {
    const dispatchSpy = spyOn(store, 'dispatch').and.callThrough();
    const divElementContainer: HTMLElement = fixture.debugElement.nativeElement.querySelector('#element');
    divElementContainer.dispatchEvent(new MouseEvent('mouseenter'));

    const button: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('.see-more-button');
    button.click();

    expect(dispatchSpy).toHaveBeenCalledWith(MoviesActions.cleanMovieSelected());
  });
});

@Component({
  template: `
    <div>
      <div id="element" hoverToShowDetails [movie]='movie'>ELEMENT TEST</div>
    </div>
  `
})
class TestComponent2 {
  public movie: Movie = {
    id: 1,
    title: 'test title',
    description: 'test description',
    duration: '2h',
    genre: ['genre 1', 'genre 2'],
    image: 'test image',
    rating: 1,
    releasedDate: new Date(),
    trailer: 'test trailer',
    saved: false
  }
}

describe('HoverToShowDetailsDirective with movie unsaved', () => {
  let component: TestComponent2;
  let fixture: ComponentFixture<TestComponent2>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestComponent2, HoverToShowDetailsDirective],
      imports: [

      ],
      providers: [provideMockStore({
        initialState: {
          movies: {
            movies: [{
              id: 1,
              title: 'test title',
              description: 'test description',
              duration: '2h',
              genre: ['genre 1', 'genre 2'],
              image: 'test image',
              rating: 1,
              releasedDate: new Date(),
              trailer: 'test trailer',
              saved: false
            }]
          },
          spinner: {
            show: false
          }
        } as AppState
      })],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2);
    store = TestBed.inject(MockStore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should add element to div container and remove later', () => {
    const divElementContainer: HTMLElement = fixture.debugElement.nativeElement.querySelector('#element');
    divElementContainer.dispatchEvent(new MouseEvent('mouseenter'));

    const hoverDiv: HTMLElement = fixture.debugElement.nativeElement.querySelector('.hover-div');
    expect(hoverDiv).toBeTruthy();

    divElementContainer.dispatchEvent(new MouseEvent('mouseleave'));
  });
});
