import { Component } from '@angular/core';
import { Header } from '../../core/header/header';
import { Footer } from '../../core/footer/footer';
import { LucideAngularModule, Settings, Users, Briefcase, Headset, BarChart, Clock, FileText, Building, Building2, Check } from 'lucide-angular';

@Component({
  selector: 'app-services',
  imports: [Header, Footer, LucideAngularModule],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services {
  icons = { Check };

  servicesList = [
    { title: 'Operations Setup', description: 'Legal entity establishment and physical infrastructure setup.', icon: Settings },
    { title: 'Recruitment', description: 'End-to-end sourcing, vetting, and professional team scale.', icon: Users },
    { title: 'Managed Workforce', description: 'Day-to-day HR, payroll, and benefits management.', icon: Briefcase },
    { title: 'HR/OEX Management', description: 'Enterprise management and efficiency optimization.', icon: Headset },
    { title: 'Process Optimization', description: 'Workflow modeling for maximum service efficiency.', icon: BarChart },
    { title: '24/7 Support', description: 'Global coverage with round the clock operational assistance.', icon: Clock },
    { title: 'Performance Reporting', description: 'Data-driven insight and KPIs for your African teams.', icon: FileText },
    { title: 'Tech Setup', description: 'IT infrastructure, hardware, and secure network deployment.', icon: Building },
    { title: 'Facility Management', description: 'Corporate office space, utilities, and high-speed fiber connectivity.', icon: Building2 },
    { title: 'Custom Offshore Build', description: 'Bespoke Build-Operate-Transfer (BOT) models tailored to scale.', icon: Settings }
  ];

  deepDiveFeatures = [
    {
      title: 'Recruitment & Talent Sourcing',
      description: 'We tap into Africa\'s deep pools of specialized talent to build cohesive teams that fit your corporate culture and technical requirements across software engineering, support, and operations.',
      list1: ['Sourcing & Vetting', 'Interview Management', 'Background Checking'],
      list2: ['Offer Structuring', 'Onboarding & Training Plans', 'Legal Compliance']
    },
    {
      title: 'Facility & Infrastructure',
      description: 'Beyond standard office space, we provide enterprise-grade secure hubs equipped with redundant power, enterprise network routing, and high-performance hardware.',
      list1: ['Class-A Office Sourcing', 'Equipment Leasing', 'Fiber Internet Setup'],
      list2: ['Secure Server Rooms', 'Service Agreement (SLA)', 'Access Control & Security']
    }
  ];

  tiers = [
    { feature: 'Talent Sourcing', basic: 'Limited', pro: 'All Roles', enterprise: 'Dedicated Headhunter' },
    { feature: 'Infrastructure', basic: 'Shared Space', pro: 'Private Office', enterprise: 'Custom Build-Out' },
    { feature: 'Support', basic: 'Business Hours', pro: '24/7/365', enterprise: 'Dedicated Account Manager' },
    { feature: 'Reporting', basic: 'Monthly Summary', pro: 'Weekly Detailed KPI', enterprise: 'Live Dashboard & SLA' }
  ];
}
