import { Directive, ElementRef, OnInit, OnDestroy, Input } from '@angular/core';

@Directive({
  selector: '.reveal-on-scroll, [reveal-on-scroll], [appScrollReveal]',
  standalone: true,
})
export class ScrollReveal implements OnInit, OnDestroy {
  @Input() revealIndex = 0;
  private observer!: IntersectionObserver;
  private reducedMotion = false;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const host = this.el.nativeElement;
    
    if (this.reducedMotion) {
      host.classList.add('is-visible');
      return;
    }
    
    if (this.revealIndex > 0) {
      const delay = Math.min(this.revealIndex * 0.1, 0.5);
      host.style.transitionDelay = `${delay}s`;
    }

    this.observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          host.classList.add('is-visible');
          this.observer.unobserve(host);
        }
      }
    }, { threshold: 0.1, rootMargin: '0px 0px -10% 0px' });
    
    this.observer.observe(host);
  }

  ngOnDestroy(): void { this.observer?.disconnect(); }
}
