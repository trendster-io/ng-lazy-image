import { Component, ElementRef } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';

import { LazyImageDirective } from './lazy-image.directive';

@Component({
  selector: 'app-test-container',
  template: `
    <img
      src="assets/img/dog.jpg"
      alt="Golden Retriever"
      lazy
      (willLoad)="onImgWillLoad(1)"
      (load)="onImgLoad(1)"
      (error)="onImgError()"
    />

    <img
      src="assets/img/dog.jpg"
      alt="Golden Retriever"
      lazy
      (willLoad)="onImgWillLoad(2)"
      (load)="onImgLoad(2)"
      (error)="onImgError()"
    />

    <img
      src="assets/img/dog.jpg"
      alt="Golden Retriever"
      lazy
      (willLoad)="onImgWillLoad(3)"
      (load)="onImgLoad(3)"
      (error)="onImgError()"
    />

    <img
      src="assets/img/dog.jpg"
      alt="Golden Retriever"
      lazy
      (willLoad)="onImgWillLoad(4)"
      (load)="onImgLoad(4)"
      (error)="onImgError()"
    />

    <img
      src="assets/img/dog.jpg"
      alt="Golden Retriever"
      lazy
      (willLoad)="onImgWillLoad(5)"
      (load)="onImgLoad(5)"
      (error)="onImgError()"
    />
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 600px;
        overflow-y: auto;
      }

      img {
        display: block;
        object-fit: cover;
        width: 400px;
        height: 400px;
        margin: 50px 0;
      }
    `
  ]
})
class ContainerComponent {}

describe('LazyImageDirective', () => {
  let fixture: ComponentFixture<ContainerComponent>;
  let container: ContainerComponent;
  let el: ElementRef<Element>;
  let directive: LazyImageDirective;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContainerComponent, LazyImageDirective]
    });
    fixture = TestBed.createComponent(ContainerComponent);
    container = fixture.componentInstance;
    el = fixture.elementRef;
    directive = new LazyImageDirective(el);
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });
});
