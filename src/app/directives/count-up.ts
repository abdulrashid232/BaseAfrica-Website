import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

/**
 * Animates a number counting up from 0 to the target value when the element
 * scrolls into view. Supports suffixes (+, %) and special formats like "24/7".
 *
 * Usage: <span [appCountUp]="'150+'"></span>
 */
@Directive({
  selector: '[appCountUp]',
  standalone: true,
})
export class CountUp implements OnInit, OnDestroy {
  @Input() appCountUp = '';
  /** Animation duration in ms */
  @Input() countDuration = 2000;

  private observer!: IntersectionObserver;
  private animationId: number | null = null;
  private hasAnimated = false;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    // Show "0" (or the non-numeric format) initially
    this.el.nativeElement.textContent = this.formatValue(0);

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !this.hasAnimated) {
            this.hasAnimated = true;
            this.animate();
          }
        }
      },
      { threshold: 0.3 }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    if (this.animationId !== null) {
      cancelAnimationFrame(this.animationId);
    }
  }

  // ── Parsing ──

  private get parsed(): { numeric: number; suffix: string; format: 'number' | 'fraction' } {
    const raw = this.appCountUp.trim();

    // Fraction format e.g. "24/7" – not countable, show statically
    if (/^\d+\/\d+$/.test(raw)) {
      return { numeric: 0, suffix: '', format: 'fraction' };
    }

    // Extract leading number + trailing suffix
    const match = raw.match(/^(\d+)(.*)$/);
    if (match) {
      return { numeric: parseInt(match[1], 10), suffix: match[2], format: 'number' };
    }

    return { numeric: 0, suffix: raw, format: 'number' };
  }

  private formatValue(current: number): string {
    const { numeric, suffix, format } = this.parsed;

    if (format === 'fraction') {
      return this.appCountUp.trim();
    }

    return `${current}${suffix}`;
  }

  // ── Animation ──

  private animate(): void {
    const { numeric, format } = this.parsed;

    // Non-countable formats: just set immediately
    if (format === 'fraction' || numeric === 0) {
      this.el.nativeElement.textContent = this.appCountUp.trim();
      return;
    }

    const startTime = performance.now();
    const duration = this.countDuration;
    const target = numeric;

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic for a satisfying deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);

      this.el.nativeElement.textContent = this.formatValue(current);

      if (progress < 1) {
        this.animationId = requestAnimationFrame(step);
      }
    };

    this.animationId = requestAnimationFrame(step);
  }
}
