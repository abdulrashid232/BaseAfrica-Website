import { Component, inject, effect, OnDestroy } from '@angular/core';
import { BookingModalService } from '../../services/booking-modal';

@Component({
  selector: 'app-booking-modal',
  standalone: true,
  imports: [],
  templateUrl: './booking-modal.html',
  styleUrl: './booking-modal.css'
})
export class BookingModal implements OnDestroy {
  private bookingModalService = inject(BookingModalService);
  isOpen = this.bookingModalService.isOpen;

  constructor() {
    effect(() => {
      if (typeof document === 'undefined') return;
      document.body.style.overflow = this.isOpen() ? 'hidden' : '';
    });
  }

  ngOnDestroy(): void {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
  }

  close(): void {
    this.bookingModalService.closePopup();
  }
}
