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

interface ProjectVideo {
  src: string;
  title: string;
}

interface WinMetric {
  value: string;
  label: string;
}

interface WinLarge {
  type?: 'comparison' | 'metrics';
  title: string;
  before?: string; // for comparison
  after?: string; // for comparison
  metrics?: WinMetric[]; // for metrics-type card
  description?: string;
}

interface WinSmall {
  title: string;
  subtitle?: string;
  description?: string;
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
  videos?: ProjectVideo[];
  wins?: { large: WinLarge[]; small: WinSmall[] };
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
        { src: 'assets/Boatpoint/1.jpg', alt: 'Main operations floor' },
        { src: 'assets/Boatpoint/2.jpg', alt: 'Training and meeting room' },
        { src: 'assets/Boatpoint/3.jpg', alt: 'Staff lounge and break area' },
        { src: 'assets/Boatpoint/4.jpg', alt: 'Performance dashboards' },
        { src: 'assets/Boatpoint/5.jpg', alt: 'Operations team at work' },
        { src: 'assets/Boatpoint/6.jpg', alt: 'Operations team at work' },
        { src: 'assets/Boatpoint/7.jpg', alt: 'Operations team at work' }
      ],
      videos: [
        { src: 'assets/Boatpoint/video_2026-06-21_23-11-43.mp4', title: 'Operations Overview' },
        { src: 'assets/Boatpoint/IMG_4924.MP4', title: 'Team Interview' }
      ],
      wins: {
        large: [
          {
            type: 'comparison',
            title: 'Daily Ticket Volume',
            before: '40 tickets / day',
            after: '500–1,000 tickets / day',
            description: 'Covering both parking and main event tickets, across day and night shifts.'
          },
          {
            type: 'metrics',
            title: 'Sales Generated',
            metrics: [
              { value: '$100K+', label: 'Parking sales' },
              { value: '$400K', label: 'Sporting & concert sales' }
            ],
            description: 'Driven by the team we built, trained and run on the ground.'
          }
        ],
        small: [
          {
            title: '12–25x',
            subtitle: 'Higher daily throughput',
            description: 'From 40 tickets a day to 500–1,000, without a drop in quality.'
          },
          {
            title: '2 lines',
            subtitle: 'Parking & main events',
            description: 'One team running both ticket categories side by side.'
          },
          {
            title: '$500K+',
            subtitle: 'Combined monthly sales',
            description: 'Parking and event sales generated through the operation.'
          }
        ]
      },
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

  // ─── Helper methods for "What Changed" section ───
  extractLeadPhrase(text: string): string {
    // Extracts the first few words (up to the first dash or verb phrase)
    const match = text.match(/^([^—–]+?(?:\s+\w+)*?)(?:\s+(?:running|freed|lower|grew|across))/);
    return match ? match[1] + (match[2] ? ' ' + match[2].split(' ')[0] : '') : text.split(' ').slice(0, 2).join(' ');
  }

  extractRest(text: string): string {
    // Extracts the remainder after the lead phrase
    const leadPhrase = this.extractLeadPhrase(text);
    return text.substring(leadPhrase.length).trim();
  }
}
