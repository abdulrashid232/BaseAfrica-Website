import { Component } from '@angular/core';
import { LucideAngularModule, Banknote, Users, History, ShieldCheck } from 'lucide-angular';
import { NgClass } from '@angular/common';
import { ScrollReveal } from '../../directives/scroll-reveal';

@Component({
  selector: 'app-why-choose-us',
  imports: [LucideAngularModule, NgClass, ScrollReveal],
  templateUrl: './why-choose-us.html',
  styleUrl: './why-choose-us.css',
})
export class WhyChooseUs {
  protected readonly icons = {
    Banknote,
    Users,
    History,
    ShieldCheck
  }

  features = [
    {
      title: 'Lower Costs',
      description: 'Optimize your budget with significantly reduced overhead costs while maintaining premium service quality.',
      icon: this.icons.Banknote
    },
    {
      title: 'Scalable Teams',
      description: 'Rapidly expand or contract your workforce based on real-time operational demands with zero friction.',
      icon: this.icons.Users
    },
    {
      title: '24/7 Ops',
      description: 'Round-the-clock operational coverage ensuring your business never sleeps and global deadlines are met.',
      icon: this.icons.History
    },
    {
      title: 'On-Ground Mgmt',
      description: 'Local expertise and management teams ensure compliance, cultural alignment, and smooth execution.',
      icon: this.icons.ShieldCheck
    }
  ];

  roadmapSteps = [
    { number: 1, title: 'Discovery', subtitle: 'Identifying goals & needs', active: false },
    { number: 2, title: 'Setup', subtitle: 'Infrastructure & Legal', active: false },
    { number: 3, title: 'Workforce Build', subtitle: 'Hire, train & align teams', active: true },
    { number: 4, title: 'Launch', subtitle: 'Operational kickoff', active: false },
    { number: 5, title: 'Scale', subtitle: 'Continuous growth', active: false },
  ];
}
