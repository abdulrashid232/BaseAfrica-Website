import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, OnInit, OnDestroy, Input, inject, PLATFORM_ID } from '@angular/core';

@Directive({
  selector: '.reveal-on-scroll, [reveal-on-scroll], [appScrollReveal]',
  standalone: true,
})
export class ScrollReveal implements OnInit, OnDestroy {
  @Input() revealIndex = 0;
  private observer!: IntersectionObserver;
  private reducedMotion = false;
  private isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    // 1. Guard for Server-Side Rendering
    if (!this.isBrowser) {
      return;
    }

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

    // This safely executes only in the browser now
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

  ngOnDestroy(): void { 
    // 2. Prevent server-side disconnect attempts
    if (this.observer) {
      this.observer.disconnect(); 
    }
  }
}