import { Component } from '@angular/core';
// import { RouterLink } from '@angular/router';
import { Header } from '../../core/header/header';
import { Footer } from '../../core/footer/footer';
import { LucideAngularModule, Mail, Phone, Globe } from 'lucide-angular';
import { ScrollReveal } from '../../directives/scroll-reveal';

@Component({
  selector: 'app-terms',
  imports: [Header, Footer, LucideAngularModule, ScrollReveal],
  templateUrl: './terms.html',
  styleUrl: './terms.css',
})
export class Terms {
  protected readonly icons = { Mail, Phone, Globe };
  effectiveDate = 'June 20, 2026';
}
