import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './core/header/header';
import { HeroSection } from './core/hero-section/hero-section';
import { WhyChooseUs } from './core/why-choose-us/why-choose-us';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, HeroSection, WhyChooseUs],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('BaseAfrica');
}
