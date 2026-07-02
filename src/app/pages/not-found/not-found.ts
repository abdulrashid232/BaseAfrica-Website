import { Component, inject, PLATFORM_ID, RESPONSE_INIT } from '@angular/core';
import { RouterLink } from '@angular/router';

import { LucideAngularModule, Home, Mail, Compass, HelpCircle } from 'lucide-angular';
import { isPlatformServer } from '@angular/common';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './not-found.html',
  styleUrl: './not-found.css',
})
export class NotFound {
  protected readonly icons = { Home, Mail, Compass, HelpCircle };

  constructor() {
    const platformId = inject(PLATFORM_ID);
    if (isPlatformServer(platformId)) {
      const responseInit = inject(RESPONSE_INIT, { optional: true });
      if (responseInit) {
        responseInit.status = 404;
      }
    }
  }
}
