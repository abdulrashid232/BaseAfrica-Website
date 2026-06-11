import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Header } from '../../core/header/header';
import { Footer } from '../../core/footer/footer';
import { LucideAngularModule, MessageSquare, Mail, MapPin, ShieldCheck } from 'lucide-angular';
import { EmailService } from '../../services/email';

@Component({
  selector: 'app-contact',
  imports: [Header, Footer, LucideAngularModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  icons = { MessageSquare, Mail, MapPin, ShieldCheck };

  loading = false;
  status: 'idle' | 'success' | 'error' = 'idle';
  errorMessage = '';

  contactForm = new FormGroup({
    fullName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    company: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^\+?[\d\s()-]+$/)]),
    requirements: new FormControl('', [Validators.required, Validators.minLength(10)])
  });

  constructor(private emailService: EmailService) { }

  onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.status = 'idle';

    const { fullName, company, email, phone, requirements } = this.contactForm.value;

    this.emailService
      .sendEmail({
        fullName: fullName ?? '',
        company: company ?? '',
        email: email ?? '',
        phone: phone ?? '',
        requirements: requirements ?? '',
      })
      .then(() => {
        this.status = 'success';
        this.contactForm.reset();
      })
      .catch((err) => {
        this.status = 'error';
        this.errorMessage = err?.text || 'Something went wrong. Please try again.';
        console.error('EmailJS error:', err);
      })
      .finally(() => {
        this.loading = false;
      });
  }
}