import {
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges
} from '@angular/core';

@Directive({
  selector: 'img[lazy]'
})
export class LazyImageDirective implements OnChanges, OnDestroy {
  private io: IntersectionObserver;
  @Input() src: string;
  @Input() root: Element;
  @Input() rootMargin: string;
  @Input() threshold: number | number[];
  @Output() willLoad = new EventEmitter<void>();
  @HostBinding('attr.src') srcAttr: string;
  @HostBinding('attr.decoding') decodingAttr = 'async';
  @HostBinding('style.visibility') get visibilityStyle(): string {
    return this.srcAttr ? 'visible' : 'hidden';
  }

  constructor(private el: ElementRef<Element>) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.src && changes.src.currentValue) {
      this.addIO();
    }
  }

  ngOnDestroy(): void {
    if (this.io) {
      this.removeIO();
    }
  }

  private canLazyLoad(): boolean {
    return typeof window !== 'undefined' && 'IntersectionObserver' in window;
  }

  private load(): void {
    this.srcAttr = this.src;
    this.willLoad.emit();
  }

  private lazyLoadImage(): void {
    // Remove any previous observer if exists
    if (this.io) {
      this.removeIO();
    }
    this.io = new IntersectionObserver(
      entry => {
        // because there will only ever be one instance
        // of the element we are observing
        // we can just use entry[0]
        if (entry[0].isIntersecting) {
          this.load();
          this.removeIO();
        }
      },
      {
        root: this.root,
        rootMargin: this.rootMargin,
        threshold: this.threshold
      }
    );
    this.io.observe(this.el.nativeElement);
  }

  private loadImage(): void {
    setTimeout(() => this.load(), 200);
  }

  private addIO(): void {
    // Check if window is defined to handle SSR, as well as check for IntersectionObserever support in the browser
    if (this.canLazyLoad()) {
      this.lazyLoadImage();
    } else {
      // Fallback to setTimeout if IntersectionObserver-based lazy loading is not supported
      this.loadImage();
    }
  }

  private removeIO(): void {
    this.io.disconnect();
    this.io = null;
  }
}
