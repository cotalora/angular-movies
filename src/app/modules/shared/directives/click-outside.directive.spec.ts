import { Component } from '@angular/core';
import { ClickOutsideDirective } from './click-outside.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: `
    <div>
      <div clickOutside (clickOutside)='clickOutside()'>ELEMENT TEST</div>
      <div id="outside">ELEMENT OUTSIDE TEST</div>
    </div>
  `
})
class TestComponent {
  public clickOutside() { }
}

describe('ClickOutsideDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestComponent, ClickOutsideDirective],
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

  it('should call the clickOutside when click outside', () => {
    spyOn(component, 'clickOutside');

    const divElement: HTMLElement = fixture.debugElement.nativeElement.querySelector('#outside');
    divElement.click();

    expect(component.clickOutside).toHaveBeenCalled();
  });
});
