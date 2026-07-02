import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit, OnDestroy {
  navLinks = [
    { label: 'Home', url: '/home' },
    { label: 'Services', url: '/services' },
    { label: 'Projects', url: '/projects' },
    { label: 'About', url: '/about' },
    { label: 'Contact', url: '/contact' }
  ];
  isMobileMenuOpen = false;
  isScrolled = false;

  private isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  private scrollHandler?: () => void;
  // private isBrowser: boolean;

  // constructor(@Inject(PLATFORM_ID) platformId: object) {
  //   this.isBrowser = isPlatformBrowser(platformId);
  // }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.scrollHandler = () => {
        this.isScrolled = window.scrollY > 10;
      };
      window.addEventListener('scroll', this.scrollHandler, { passive: true });
      this.scrollHandler();
    }
  }

  ngOnDestroy(): void {
    if (this.isBrowser && this.scrollHandler) {
      window.removeEventListener('scroll', this.scrollHandler);
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
