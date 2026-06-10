import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Header } from '../../core/header/header';
import { Footer } from '../../core/footer/footer';
import { LucideAngularModule, MessageSquare, Mail, MapPin, ShieldCheck } from 'lucide-angular';

@Component({
  selector: 'app-contact',
  imports: [Header, Footer, LucideAngularModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  icons = { MessageSquare, Mail, MapPin, ShieldCheck };

  contactForm = new FormGroup({
    fullName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    company: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^\+?[\d\s()-]+$/)]),
    requirements: new FormControl('', [Validators.required, Validators.minLength(10)])
  });

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
      // Add your form submission logic here
      alert('Inquiry submitted successfully!');
      this.contactForm.reset();
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
