import { Component } from '@angular/core';
import { TechCarouselComponent } from '../../components/tech-carousel/tech-carousel';
@Component({
  selector: 'app-about',
  imports: [TechCarouselComponent],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
