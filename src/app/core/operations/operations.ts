import { Component } from '@angular/core';
import { LucideAngularModule, Building2, IdCard, Landmark } from 'lucide-angular';

@Component({
  selector: 'app-operations',
  imports: [LucideAngularModule],
  templateUrl: './operations.html',
  styleUrl: './operations.css',
})
export class Operations {
  services = [
    {
      title: 'Offshore Setup',
      description: 'Legal entity formation, office procurement, and full infrastructure deployment for your African presence.',
      icon: Building2
    },
    {
      title: 'Talent Management',
      description: 'Recruitment, training, and performance management tailored to your specific corporate requirements.',
      icon: IdCard
    },
    {
      title: 'Payroll & Compliance',
      description: 'End-to-end payroll processing, local tax compliance, and benefit administration services.',
      icon: Landmark
    }
  ];
}
