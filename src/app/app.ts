import { Component, signal, inject, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Router, RouterOutlet, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { Subscription } from 'rxjs';
import { SeoRouterService } from './services/seo';
import { BookingModalService } from './services/booking-modal';
import { BookingModal } from './core/booking-modal/booking-modal';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BookingModal],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit, OnDestroy {
  protected readonly title = signal('Open Base Africa');
  private router = inject(Router);
  private sub!: Subscription;
  private seoRouterService = inject(SeoRouterService);
  private bookingModalService = inject(BookingModalService);

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = (event.target as HTMLElement)?.closest('[data-booking-modal]');
    if (target) {
      event.preventDefault();
      this.bookingModalService.openPopup();
    }
  }

  /** True while a route transition is in progress */
  loading = signal(false);

  ngOnInit(): void {
    this.sub = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.loading.set(true);
      } else if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        // Small delay so the bar is visible even on fast navigations
        setTimeout(() => this.loading.set(false), 150);
      }
    });

    this.seoRouterService.initAutomaticSeo();
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
