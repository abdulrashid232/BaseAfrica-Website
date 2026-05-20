import { Component } from '@angular/core';
import { Operations } from "../../core/operations/operations";
import { Feedback } from "../../core/feedback/feedback";
import { Footer } from "../../core/footer/footer";
import { WhyChooseUs } from "../../core/why-choose-us/why-choose-us";
import { HeroSection } from "../../core/hero-section/hero-section";
import { Header } from "../../core/header/header";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [Operations, Feedback, Footer, WhyChooseUs, HeroSection, Header, RouterOutlet],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
