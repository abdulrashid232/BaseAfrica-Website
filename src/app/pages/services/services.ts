import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Header } from '../../core/header/header';
import { Footer } from '../../core/footer/footer';
import { LucideAngularModule, Building2, Users, Briefcase, Cog, BarChart3, Headset, Monitor, Wrench, Rocket, Check, ArrowRight } from 'lucide-angular';
import { ScrollReveal } from '../../directives/scroll-reveal';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-services',
  imports: [Header, Footer, LucideAngularModule, RouterLink, ScrollReveal, NgClass],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services {
  protected readonly icons = { Check, ArrowRight };

  serviceCategories = [
    {
      icon: Building2,
      title: 'Operations Infrastructure Setup',
      description: 'We find, fit-out, and equip your office so your team walks into a fully functional workspace from day one.',
      items: ['Office sourcing & lease negotiation', 'Interior fit-out & branding', 'Power backup (generator + UPS)', 'High-speed fibre internet', 'Furniture & ergonomic workstations', 'Security systems & access control']
    },
    {
      icon: Users,
      title: 'Workforce Recruitment & Training',
      description: 'Local hiring built around your exact role profiles, culture, and performance standards.',
      items: ['Role profiling & job description design', 'Multi-channel sourcing & screening', 'Structured interviews & assessments', 'Background & reference checks', 'Client-specific onboarding programme', 'Skills training & culture alignment']
    },
    {
      icon: Briefcase,
      title: 'Managed Workforce',
      description: 'Ongoing day-to-day management so your offshore team runs as smoothly as an in-house one.',
      items: ['Daily attendance & leave tracking', 'Performance management & reviews', 'Payroll processing & disbursement', 'Benefits administration', 'HR policy enforcement', 'Employee engagement & retention']
    },
    {
      icon: Cog,
      title: 'Full Operations Management',
      description: 'We take accountability for results, not just tasks—your dedicated ops manager owns the outcomes.',
      items: ['Workflow design & SOP creation', 'KPI framework & dashboards', 'Dedicated operations manager', 'Quality assurance & SLA tracking', 'Escalation management', 'Continuous improvement cycles']
    },
    {
      icon: BarChart3,
      title: 'Process Design & Optimisation',
      description: 'We map, model, and refine your workflows to squeeze maximum efficiency from every hour.',
      items: ['Current-state process mapping', 'Bottleneck identification', 'Workflow re-engineering', 'Automation opportunity assessment', 'Standard operating procedures', 'Ongoing optimisation sprints']
    },
    {
      icon: Headset,
      title: '24/7 Operations Support',
      description: 'Round-the-clock coverage so your business never sleeps, regardless of client time zones.',
      items: ['Shift scheduling & overlap planning', 'Real-time performance monitoring', 'Incident response & escalation', 'Night-shift supervision', 'Cross-timezone handoff protocols', 'Uptime & availability tracking']
    },
    {
      icon: Monitor,
      title: 'Technology & Systems Setup',
      description: 'Enterprise-grade IT infrastructure deployed and maintained by our local tech team.',
      items: ['Hardware procurement & setup', 'Secure network & firewall config', 'Cloud & on-prem hybrid deployment', 'Software licensing & MDM', 'Data backup & disaster recovery', 'IT helpdesk & ongoing support']
    },
    {
      icon: Wrench,
      title: 'Facility Management',
      description: 'We keep the lights on, the offices clean, and the environment productive 365 days a year.',
      items: ['Janitorial & maintenance services', 'Utilities management', 'Vendor & contractor coordination', 'Health & safety compliance', 'Space planning & expansion', 'Asset tracking & lifecycle management']
    }
  ];

  customBuild = {
    title: 'Custom Offshore Build',
    tagline: 'Our Flagship Offer',
    description: 'The full package—a turnkey offshore operation designed, built, and run entirely by OpenBaseAfrica. You bring the vision; we deliver everything else.',
    items: [
      'End-to-end project management',
      'Legal entity formation & compliance',
      'Custom office build-out to your spec',
      'Full workforce recruitment & training',
      'Dedicated operations & HR team on-site',
      'Technology stack deployment & support',
      'Performance management & KPI reporting',
      'Ongoing optimisation & scale planning'
    ]
  };

  packages = [
    {
      name: 'Starter',
      range: '$3,000 – $8,000 / mo',
      description: 'For early-stage companies testing the offshore model with a lean, focused team.',
      coverage: ['~10 staff members', 'Basic office setup', 'Light management & reporting', 'Business-hours support', 'Monthly performance summary'],
      featured: false
    },
    {
      name: 'Growth',
      range: '$10,000 – $25,000 / mo',
      description: 'For scaling teams that need full management, private infrastructure, and regular insight.',
      coverage: ['20–50 staff members', 'Private office & full fit-out', 'Full workforce management', 'Regular KPI reporting', '24/7 operational support', 'Dedicated HR & ops contact'],
      featured: true
    },
    {
      name: 'Enterprise',
      range: '$25,000 – $50,000+ / mo',
      description: 'For enterprises needing dedicated infrastructure, large teams, and an accountable operations manager.',
      coverage: ['50–150+ staff members', 'Full custom infrastructure', 'Dedicated operations manager', 'Live dashboards & SLA guarantees', 'Priority escalation paths', 'Strategic growth planning'],
      featured: false
    }
  ];

  timeline = [
    { stage: 'Discovery', duration: '1–2 weeks', description: 'We learn your goals, map workflows, and define the operating model.' },
    { stage: 'Setup', duration: '2–4 weeks', description: 'Legal entity, office procurement, fit-out, and IT infrastructure deployment.' },
    { stage: 'Workforce Build', duration: '3–6 weeks', description: 'Recruit, screen, hire, and train your team to your exact standards.' },
    { stage: 'Launch', duration: 'Weeks 6–8', description: 'Operational kickoff with full management support and KPI tracking live.' },
    { stage: 'Scale', duration: 'Ongoing', description: 'Continuous growth, performance optimisation, and expansion planning.' }
  ];
}
