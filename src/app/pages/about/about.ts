import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Header } from '../../core/header/header';
import { Footer } from '../../core/footer/footer';
import { LucideAngularModule, Shield, Users, Clock, DollarSign, Globe, MapPin, ArrowRight, Check, Building2, TrendingUp } from 'lucide-angular';
import { ScrollReveal } from '../../directives/scroll-reveal';

@Component({
  selector: 'app-about',
  imports: [Header, Footer, RouterLink, LucideAngularModule, ScrollReveal],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  protected readonly icons = { Shield, Users, Clock, DollarSign, Globe, MapPin, ArrowRight, Check, Building2, TrendingUp };

  // What sets us apart from standard outsourcing
  differentiators = [
    {
      icon: Building2,
      title: 'We Build the Operation',
      description: 'Standard outsourcing hands you a vendor. We build a fully functioning operation, office, team, systems, management, that runs as if it were your own.'
    },
    {
      icon: Shield,
      title: 'Full Accountability',
      description: 'Our operations managers are accountable for KPIs and outcomes, not just headcount. We own the results alongside you.'
    },
    {
      icon: Users,
      title: 'Dedicated Teams, Not Pooled Resources',
      description: 'Every recruit is hired specifically for your workflows, trained on your processes, and managed to your standards, never shared across clients.'
    },
    {
      icon: TrendingUp,
      title: 'Built to Scale',
      description: 'Our model is designed from the ground up for growth. Start with 5 people, scale to 150+, same infrastructure, same management rigour.'
    }
  ];

  // Leadership team
  team = [
    {
      name: 'Kelvin Nana Boateng',
      role: 'Managing Director',
      bio: 'Leads overall strategy and client partnerships. Built and scaled the US ticket brokerage operation from a single branch to three locations with 150+ staff.',
      image: '' // Headshot to be supplied
    },
    {
      name: 'Fred Bonney',
      role: 'Director of Workforce & Outsourcing',
      bio: 'Oversees all recruitment, training, and workforce operations. Ensures every team deployed meets client-specific performance and culture standards.',
      image: '../assets/Fred Bonney.jpeg'
    },
    {
      name: 'Kofi Safo',
      role: 'Director of Operations',
      bio: 'Runs day-to-day operations across all branches, infrastructure, compliance, facility management, and operational KPIs.',
      image: '../assets/kofi-safo.png'
    },
    {
      name: 'Tina Presley',
      role: 'US Business Development Advisor',
      bio: 'Bridges the gap between US-based clients and the Ghana operation. Handles scoping, client onboarding, and strategic account growth.',
      image: '../assets/Tina.jpeg'
    }
  ];

  // Why Ghana
  ghanaPoints = [
    { icon: Shield, title: 'Political Stability', description: 'One of Africa\'s most stable democracies with peaceful transitions of power, strong institutions, and a business-friendly regulatory environment.' },
    { icon: Globe, title: 'English-Speaking Workforce', description: 'English is the official language of government, education, and business, zero translation overhead for international clients.' },
    { icon: Clock, title: 'Time-Zone Alignment', description: 'Ghana operates on GMT, providing 4–6 hours of overlap with the US East Coast and full working-day overlap with Europe and the UK.' },
    { icon: DollarSign, title: 'Straightforward for Foreign Business', description: 'No restrictions on foreign ownership, USD-denominated contracts, established banking channels, and a growing ecosystem of professional services.' }
  ];

  // Where we're going next
  roadmap = [
    { label: 'Nigeria', description: 'Expanding into Africa\'s largest economy for tech talent and financial services operations.' },
    { label: 'Kenya', description: 'East African hub for multilingual support and regional logistics management.' },
    { label: 'Healthcare & Fintech', description: 'Building specialised workforce verticals for regulated industries with high compliance needs.' },
    { label: 'AI & Data Operations', description: 'Scaling into data labelling, model evaluation, and AI-powered process management.' }
  ];
}
