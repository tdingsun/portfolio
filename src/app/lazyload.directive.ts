import { Directive, OnChanges, HostBinding, Input, ElementRef } from '@angular/core';
import { Attribute } from '@angular/compiler';

@Directive({
  selector: 'img[appLazyload]'
})
export class LazyloadDirective implements OnChanges{
  @HostBinding('attr.src') srcAttr = null;
  @Input() src: string;

  constructor(private el: ElementRef) { }

  ngOnChanges() {
    this.canLazyLoad() ? this.lazyLoadImage(): this.loadImage();
  }

  private canLazyLoad() {
    return window && 'IntersectionObserver' in window;
  }

  private lazyLoadImage() {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(({ isIntersecting }) => {
        if (isIntersecting) {
          this.loadImage();
          obs.unobserve(this.el.nativeElement);
        }
      });
    }, {
      rootMargin: '500px'
    });
    obs.observe(this.el.nativeElement);
  }

  private loadImage() {
    this.srcAttr = this.src;
  }

  

}
