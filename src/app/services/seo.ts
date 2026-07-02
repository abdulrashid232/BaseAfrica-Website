import { Injectable, inject, RendererFactory2, ViewEncapsulation, DOCUMENT } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Meta, Title} from '@angular/platform-browser';
import { filter, map } from 'rxjs/operators';

const DEFAULT_OG_IMAGE = 'https://openbaseafrica.com/assets/hero-seo.png';

@Injectable({
  providedIn: 'root'
})
export class SeoRouterService {
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private title = inject(Title);
  private meta = inject(Meta);
  private document = inject(DOCUMENT);

  private renderer = inject(RendererFactory2).createRenderer(null, {
    id: 'seo-automation-renderer',
    encapsulation: ViewEncapsulation.None,
    styles: [],
    data: {}
  });

  initAutomaticSeo(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        // Traverse to the deepest active leaf, then read ITS data.
        let route = this.activatedRoute;
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route.snapshot.data;
      })
    ).subscribe((seo) => {
      if (!seo || (!seo['title'] && !seo['description'])) return;

      this.title.setTitle(seo['title']);
      this.meta.updateTag({ name: 'description', content: seo['description'] });

      if (seo['keywords']) {
        this.meta.updateTag({ name: 'keywords', content: seo['keywords'] });
      }

      if (seo['robots']) {
        this.meta.updateTag({ name: 'robots', content: seo['robots'] });
      } else {
        this.meta.removeTag('name="robots"');
      }

      this.meta.updateTag({ property: 'og:title', content: seo['title'] });
      this.meta.updateTag({ property: 'og:description', content: seo['description'] });

      // Image handling: falls back to a sitewide default if a route doesn't set its own.
      const image = seo['image'] || DEFAULT_OG_IMAGE;
      this.meta.updateTag({ property: 'og:image', content: image });
      this.meta.updateTag({ property: 'og:image:width', content: seo['imageWidth'] || '1200' });
      this.meta.updateTag({ property: 'og:image:height', content: seo['imageHeight'] || '630' });
      this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
      this.meta.updateTag({ name: 'twitter:image', content: image });

      this.manageJsonLd(seo['schema']);
    });
  }

  private manageJsonLd(schema: Record<string, any> | undefined): void {
    const oldScript = this.document.getElementById('app-json-ld');
    if (oldScript) {
      this.renderer.removeChild(this.document.head, oldScript);
    }
    if (!schema) return;

    const script = this.renderer.createElement('script');
    this.renderer.setAttribute(script, 'id', 'app-json-ld');
    this.renderer.setAttribute(script, 'type', 'application/ld+json');
    script.text = JSON.stringify(schema);

    this.renderer.appendChild(this.document.head, script);
  }
}