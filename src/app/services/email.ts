import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { environment } from '../../environments'

@Injectable({ providedIn: 'root' })
export class EmailService {
  constructor() {
    // Init once with your Public Key
    emailjs.init({
      publicKey: environment.emailjs.publicKey,
    });
  }

  sendEmail(templateParams: Record<string, string>) {
    return emailjs.send(
      environment.emailjs.serviceId,
      environment.emailjs.templateId,
      templateParams,
      {
        publicKey: environment.emailjs.publicKey,
      }
    );
  }
}
