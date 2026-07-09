import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class BookingModalService {
  isOpen = signal(false);

  openPopup(): void {
    this.isOpen.set(true);
  }

  closePopup(): void {
    this.isOpen.set(false);
  }
}
