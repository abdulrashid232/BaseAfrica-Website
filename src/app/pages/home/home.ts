import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Footer } from '../../core/footer/footer';
import { WhyChooseUs } from '../../core/why-choose-us/why-choose-us';
import { HeroSection } from '../../core/hero-section/hero-section';
import { Header } from '../../core/header/header';
// import { RouterOutlet } from '@angular/router';
import { LucideAngularModule, Search, Building2, Users, Rocket, TrendingUp, Globe, Clock, DollarSign, ShieldCheck, ArrowRight, Check, MapPin } from 'lucide-angular';
import { CountUp } from '../../directives/count-up';
import { ScrollReveal } from '../../directives/scroll-reveal';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    Footer, WhyChooseUs, HeroSection, Header,
     RouterLink, LucideAngularModule, CountUp, ScrollReveal, NgClass
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  protected readonly icons = { ArrowRight, Check, Globe, Clock, DollarSign, ShieldCheck, MapPin };

  // What We Do – build-and-run model steps
  whatWeDoSteps = [
    { icon: Search, title: 'Find the Office', description: 'We source and secure the right commercial space in Ghana, handling lease negotiations, fit-out, and infrastructure to your specifications.' },
    { icon: Users, title: 'Hire & Train the Team', description: 'Our talent team recruits, vets, and onboards English-speaking professionals, then runs structured training aligned to your processes and culture.' },
    { icon: Building2, title: 'Set Up Systems', description: 'We deploy IT hardware, secure networks, productivity tooling, and enterprise-grade security so your team is operational from day one.' },
    { icon: Rocket, title: 'Manage Performance', description: 'Day-to-day operations, KPI tracking, HR, payroll, and continuous improvement, handled locally so you can focus on growth.' }
  ];

  // Track Record metrics
  trackRecordMetrics = [
    { value: '3', label: 'Branches Built', detail: 'Across Ghana' },
    { value: '150+', label: 'Staff Managed', detail: 'At peak operations' },
    { value: '100%', label: 'Client Retention', detail: 'Zero churn to date' },
    { value: '2+', label: 'Years Running', detail: 'Continuous operation' }
  ];

  // Service overview cards (link to /services)
  serviceCards = [
    { icon: Building2, title: 'Offshore Setup', description: 'Legal entity, office procurement, and full infrastructure deployment.' },
    { icon: Users, title: 'Talent & Recruitment', description: 'End-to-end sourcing, vetting, onboarding, and training.' },
    { icon: Rocket, title: 'Managed Workforce', description: 'Day-to-day HR, performance management, and payroll.' },
    { icon: TrendingUp, title: 'Process Optimization', description: 'Workflow modelling, KPIs, and continuous improvement.' },
    { icon: Globe, title: '24/7 Support', description: 'Round-the-clock operational coverage across time zones.' },
    { icon: ShieldCheck, title: 'Compliance & Payroll', description: 'Local tax, benefits, and regulatory compliance handled.' }
  ];

  // Packages teaser
  packages = [
    {
      name: 'Starter',
      range: '$3,000 – $8,000 / mo',
      description: 'For early-stage companies testing the offshore model with a lean, focused team.',
      highlights: ['~10 staff members', 'Basic office setup', 'Light management & reporting', 'Business-hours support', 'Monthly performance summary'],
      featured: false
    },
    {
      name: 'Growth',
      range: '$10,000 – $25,000 / mo',
      description: 'For scaling teams that need full management, private infrastructure, and regular insight.',
      highlights: ['20–50 staff members', 'Private office & full fit-out', 'Full workforce management', 'Regular KPI reporting', '24/7 operational support', 'Dedicated HR & ops contact'],
      featured: true
    },
    {
      name: 'Enterprise',
      range: '$25,000 – $50,000+ / mo',
      description: 'For enterprises needing dedicated infrastructure, large teams, and an accountable operations manager.',
      highlights: ['50–150+ staff members', 'Full custom infrastructure', 'Dedicated operations manager', 'Live dashboards & SLA guarantees', 'Priority escalation paths', 'Strategic growth planning'],
      featured: false
    }
  ];

  // Trust markers
  trustMarkers = [
    { icon: MapPin, title: 'Ghana Operating Base', description: 'Stable democracy, strong rule of law, and a growing tech ecosystem.' },
    { icon: Globe, title: 'English-Speaking Workforce', description: "Ghana's official language is English, seamless communication, zero translation overhead." },
    { icon: Clock, title: 'Time-Zone Overlap', description: 'GMT alignment gives 4–6 hours of overlap with US East Coast and full overlap with Europe.' },
    { icon: DollarSign, title: 'USD Contracts', description: 'All engagements priced and invoiced in USD, no currency risk for international clients.' }
  ];
}
