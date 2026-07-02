import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then(m => m.Home),
    data: {
      title: 'Offshore Operations & Remote Teams in Africa | OpenBase Africa',
      description: 'We build and run fully managed offshore operations, office infrastructure, and dedicated remote teams in Africa for global companies.',
      keywords: 'offshore operations, remote teams, outsourcing ghana, talent recruitment africa, managed office space ghana, business expansion africa, dev team ghana',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        'name': 'OpenBase Africa',
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
      title: 'Offshore Setup, Talent & Compliance Services | OpenBase Africa',
      description: 'From legal entity setup and office spaces to recruitment, payroll, and compliance, we handle the full lifecycle of your offshore operations.',
      keywords: 'offshore setup services, talent management africa, compliance ghana, remote team hiring, payroll outsourcing africa, offshore office infrastructure'
    }
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects/projects').then(m => m.Projects),
    data: {
      title: 'Our Track Record & Case Studies | OpenBase Africa',
      description: 'See how we built and scaled a US ticket brokerage offshore operation in Ghana from a single branch to three locations with 150+ staff.',
      keywords: 'offshore case studies, outsourcing success stories, remote team scale, ticket brokerage operations ghana, outsourcing track record'
    }
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then(m => m.About),
    data: {
      title: 'About Us & Our Team | OpenBase Africa',
      description: 'Meet the leadership team behind OpenBase Africa and discover why Ghana is the premier hub for English-speaking, time-zone aligned offshore talent.',
      keywords: 'about openbase africa, Kelvin Nana Boateng, outsourcing ghana leadership, ghana remote workforce, business support africa'
    }
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then(m => m.Contact),
    data: {
      title: 'Build Your Team - Contact Us | OpenBase Africa',
      description: 'Ready to scale your business with a dedicated, fully managed offshore team in Africa? Contact our operational experts today.',
      keywords: 'contact openbase africa, hire remote team africa, offshore office enquiry, outsource to ghana, business setup africa'
    }
  },
  {
    path: 'terms',
    loadComponent: () => import('./pages/terms/terms').then(m => m.Terms),
    data: {
      title: 'Terms of Service | OpenBase Africa',
      description: 'Terms and conditions governing the use of the OpenBase Africa website and our managed offshore services.'
    }
  },
  {
    path: 'privacy',
    loadComponent: () => import('./pages/privacy/privacy').then(m => m.Privacy),
    data: {
      title: 'Privacy Policy | OpenBase Africa',
      description: 'Privacy policy explaining how OpenBase Africa collects, uses, and safeguards your data and personal information.'
    }
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found').then(m => m.NotFound),
    data: {
      title: '404 - Page Not Found | OpenBase Africa',
      description: 'The page you are looking for does not exist on OpenBase Africa.',
      robots: 'noindex, nofollow'
    }
  }
];
