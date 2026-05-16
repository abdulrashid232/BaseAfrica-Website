import { Component } from '@angular/core';
import { LucideAngularModule, Banknote, Users, History, ShieldCheck } from 'lucide-angular';

@Component({
  selector: 'app-why-choose-us',
  imports: [LucideAngularModule],
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
}
