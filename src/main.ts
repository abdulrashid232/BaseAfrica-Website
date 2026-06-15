import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

const MIN_LOADER_MS = 1200;

const start = performance.now();

bootstrapApplication(App, appConfig)
  .then(() => {
    const elapsed = performance.now() - start;
    const remaining = Math.max(0, MIN_LOADER_MS - elapsed);

    // Keep the loader visible for at least MIN_LOADER_MS
    setTimeout(() => {
      const loader = document.getElementById('app-loader');
      if (loader) {
        loader.classList.add('fade-out');
        loader.addEventListener('transitionend', () => loader.remove(), { once: true });
      }
    }, remaining);
  })
  .catch((err) => console.error(err));
