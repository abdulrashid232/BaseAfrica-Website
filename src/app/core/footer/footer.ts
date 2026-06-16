import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, Facebook, Twitter, Linkedin, Instagram } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/company/open-base-africa/' },
    { name: 'Twitter', icon: Twitter, url: 'https://x.com/openbaseafrica' },
    { name: 'Facebook', icon: Facebook, url: 'https://www.facebook.com/profile.php?id=61590864658081' },
    { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/openbaseafrica/' }
  ];

  footerColumns = [
    {
      title: 'Quick Links',
      links: [
        { label: 'Home', url: '/home' },
        { label: 'Services', url: '/services' },
        { label: 'Projects', url: '/projects' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About', url: '/about' },
        { label: 'Contact', url: '/contact' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', url: '/' },
        { label: 'Terms of Service', url: '/' }
      ]
    }
  ];
}
