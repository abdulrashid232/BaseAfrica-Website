import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  navLinks = [
    { label: 'Home', url: '/' },
    { label: 'Services', url: '/services' },
    { label: 'Projects', url: '/projects' },
    { label: 'About', url: '/about' },
    { label: 'Contact', url: '/contact' }
  ];
  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
