import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then(m => m.Home),
    data: {
      title: 'Offshore Operations & Remote Teams in Africa | Open Base Africa',
      description: 'We build and run fully managed offshore operations, office infrastructure, and dedicated remote teams in Africa for global companies.',
      keywords: 'Outsourcing companies, Overseas assistants, Overseas administration management, Virtual assistant companies, Virtual assistant services, Overseas administrative support, Global outsourcing, Global virtual assistant, Customer Support Outsourcing, Customer Service Outsourcing, 24/7 Customer Support, Call Center Outsourcing, Contact Center Services, Inbound Call Center, Outbound Call Center, Omnichannel Customer Support, Live Chat Support, Email Support Services, Technical Support Outsourcing, Help Desk Outsourcing, Multilingual Customer Support, Phone Answering Services, Customer Experience (CX) Outsourcing, Executive Virtual Assistant, Administrative Support Services, Remote Executive Assistant, Personal Assistant Services, Calendar Management, Email Management, Appointment Scheduling, Travel Management, CRM Management, Online Research Services, Document Management, Back Office Outsourcing, Data Entry Services, Data Processing Services, Document Processing, Order Processing, Invoice Processing, Payroll Processing, HR Outsourcing, Recruitment Process Outsourcing (RPO), Bookkeeping Services, Finance & Accounting Outsourcing, Sales & Lead Generation, Lead Generation Services, Appointment Setting, Sales Outsourcing, Cold Calling Services, B2B Lead Generation, Telemarketing Services, Sales Development Representatives (SDR), Business Development Services, CRM Lead Management, Pipeline Management, IT & Digital Support, IT Outsourcing, IT Help Desk, Technical Support Services, Software Support, Managed IT Services, Cloud Support, Remote IT Support, Website Support, SaaS Customer Support, Cybersecurity Support',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        'name': 'Open Base Africa',
        'url': 'https://openbaseafrica.com',
        'logo': 'https://openbaseafrica.com/assets/Main%20Logo.png',
        'sameAs': [
          'https://www.linkedin.com/company/open-base-africa/',
          'https://x.com/openbaseafrica',
          'https://www.facebook.com/profile.php?id=61590864658081',
          'https://www.instagram.com/openbaseafrica/'
        ]
      }
    }
  },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  {
    path: 'services',
    loadComponent: () => import('./pages/services/services').then(m => m.Services),
    data: {
      title: 'Offshore Setup, Talent & Compliance Services | Open Base Africa',
      description: 'From legal entity setup and office spaces to recruitment, payroll, and compliance, we handle the full lifecycle of your offshore operations.',
      keywords: 'offshore setup services, talent management africa, compliance ghana, remote team hiring, payroll outsourcing africa, offshore office infrastructure'
    }
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects/projects').then(m => m.Projects),
    data: {
      title: 'Our Track Record & Case Studies | Open Base Africa',
      description: 'See how we built and scaled a US ticket brokerage offshore operation in Ghana from a single branch to three locations with 150+ staff.',
      keywords: 'offshore case studies, outsourcing success stories, remote team scale, ticket brokerage operations ghana, outsourcing track record'
    }
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then(m => m.About),
    data: {
      title: 'About Us & Our Team | Open Base Africa',
      description: 'Meet the leadership team behind Open Base Africa and discover why Ghana is the premier hub for English-speaking, time-zone aligned offshore talent.',
      keywords: 'about open base africa, Kelvin Nana Boateng, outsourcing ghana leadership, ghana remote workforce, business support africa'
    }
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then(m => m.Contact),
    data: {
      title: 'Build Your Team - Contact Us | Open Base Africa',
      description: 'Ready to scale your business with a dedicated, fully managed offshore team in Africa? Contact our operational experts today.',
      keywords: 'contact open base africa, hire remote team africa, offshore office enquiry, outsource to ghana, business setup africa'
    }
  },
  {
    path: 'terms',
    loadComponent: () => import('./pages/terms/terms').then(m => m.Terms),
    data: {
      title: 'Terms of Service | Open Base Africa',
      description: 'Terms and conditions governing the use of the Open Base Africa website and our managed offshore services.'
    }
  },
  {
    path: 'privacy',
    loadComponent: () => import('./pages/privacy/privacy').then(m => m.Privacy),
    data: {
      title: 'Privacy Policy | Open Base Africa',
      description: 'Privacy policy explaining how Open Base Africa collects, uses, and safeguards your data and personal information.'
    }
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found').then(m => m.NotFound),
    data: {
      title: '404 - Page Not Found | Open Base Africa',
      description: 'The page you are looking for does not exist on Open Base Africa.',
      robots: 'noindex, nofollow'
    }
  }
];
