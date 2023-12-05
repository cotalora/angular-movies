import { Component } from '@angular/core';
import { SwiperDirective } from './swiper.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';

@Component({
  template: `
    <div>
      <div>ELEMENT TEST</div>
    </div>
  `
})
class TestComponent { }

describe('SwiperDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestComponent, SwiperDirective],
      imports: [
        
      ],
      providers: [
        
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });
});
