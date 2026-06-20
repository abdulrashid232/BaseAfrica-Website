import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Header } from '../../core/header/header';
import { Footer } from '../../core/footer/footer';
import { LucideAngularModule, X, ChevronLeft, ChevronRight, MapPin, Users, Building2, Clock, Check } from 'lucide-angular';
import { CountUp } from '../../directives/count-up';
import { ScrollReveal } from '../../directives/scroll-reveal';

interface ProjectImage {
  src: string;
  alt: string;
}

interface Project {
  id: string;
  sector: string;
  title: string;
  location: string;
  summary: string;
  whatWeDid: string[];
  whatChanged: string[];
  metrics: { value: string; label: string }[];
  images: ProjectImage[];
  featured?: boolean;
}

@Component({
  selector: 'app-projects',
  imports: [Header, Footer, RouterLink, LucideAngularModule, CountUp, ScrollReveal],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  protected readonly icons = { MapPin, Users, Building2, Clock, Check, X, ChevronLeft, ChevronRight };

  // ─── Lightbox state ───
  lightboxOpen = false;
  lightboxImages: ProjectImage[] = [];
  lightboxIndex = 0;

  openLightbox(images: ProjectImage[], startIndex: number): void {
    this.lightboxImages = images;
    this.lightboxIndex = startIndex;
    this.lightboxOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox(): void {
    this.lightboxOpen = false;
    document.body.style.overflow = '';
  }

  lightboxPrev(): void {
    this.lightboxIndex = (this.lightboxIndex - 1 + this.lightboxImages.length) % this.lightboxImages.length;
  }

  lightboxNext(): void {
    this.lightboxIndex = (this.lightboxIndex + 1) % this.lightboxImages.length;
  }

  // ─── Project Data ───
  // To add a new project, simply push another object into this array.
  // All fields are rendered dynamically—no template changes required.
  projects: Project[] = [
    {
      id: 'us-ticket-brokerage',
      sector: 'Ticket Brokerage',
      title: 'US Ticket Brokerage – Full Offshore Operation',
      location: 'Ghana (3 branches)',
      summary: 'A US-based ticket brokerage needed a reliable, scalable offshore team to handle high-volume operations around the clock. We built and ran the entire African operation from scratch, office, people, systems, and daily management.',
      whatWeDid: [
        'Opened 3 branches across Ghana',
        'Recruited and managed 100–150 staff at peak',
        'Designed multi-shift workflows for 24/7 coverage',
        'Built custom ticketing dashboards and reporting tools',
        'Handled all HR, payroll, and compliance locally',
        'Provided dedicated operations managers accountable for KPIs'
      ],
      whatChanged: [
        '24/7 operation running without US management oversight',
        'Senior leadership freed from day-to-day ticketing ops',
        'Significantly lower cost per processed unit',
        'Scalable capacity team grew from 10 to 150+ in under a year',
        '100% client retention across the engagement'
      ],
      metrics: [
        { value: '3', label: 'Branches' },
        { value: '150+', label: 'Staff at Peak' },
        { value: '100%', label: 'Client Retention' },
        { value: '24/7', label: 'Operation' }
      ],
      images: [
        { src: 'assets/office_setup.png', alt: 'Main operations floor' },
        { src: 'assets/meeting_room.png', alt: 'Training and meeting room' },
        { src: 'assets/lounge_area.png', alt: 'Staff lounge and break area' },
        { src: 'assets/logistics_charts.png', alt: 'Performance dashboards' },
        { src: 'assets/rd_team.png', alt: 'Operations team at work' }
      ],
      featured: true
    }
    // ── Add future projects here ──
  ];

  get featuredProject(): Project | undefined {
    return this.projects.find(p => p.featured);
  }

  get regularProjects(): Project[] {
    return this.projects.filter(p => !p.featured);
  }
}
