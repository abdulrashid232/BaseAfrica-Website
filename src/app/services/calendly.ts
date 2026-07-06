import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class CalendlyService {
  private platformId = inject(PLATFORM_ID);
  private scriptLoaded: Promise<void> | null = null;
  private readonly baseUrl = 'https://calendly.com/openbaseafrica';

  private loadScript(): Promise<void> {
    if (!isPlatformBrowser(this.platformId)) return Promise.resolve();
    if (this.scriptLoaded) return this.scriptLoaded;

    this.scriptLoaded = new Promise((resolve, reject) => {
      if (!document.querySelector('link[data-calendly-css]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://assets.calendly.com/assets/external/widget.css';
        link.setAttribute('data-calendly-css', '');
        document.head.appendChild(link);
      }

      if (window.Calendly) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error('Calendly script failed to load'));
      document.body.appendChild(script);
    });

    return this.scriptLoaded;
  }

  async openPopup(url?: string): Promise<void> {
    if (!isPlatformBrowser(this.platformId)) return;
    await this.loadScript();
    window.Calendly.initPopupWidget({
      url: url ?? `${this.baseUrl}?text_color=0d2b4e&primary_color=c8960c`
    });
  }
}