import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MobileWhatsappCtaComponent } from './components/mobile-whatsapp-cta/mobile-whatsapp-cta.component';
import { SeoService } from './services/seo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    MobileWhatsappCtaComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Carvajal Contadores y Consultores';

  constructor(private seoService: SeoService) {}

  ngOnInit() {
    this.seoService.setSeoData();
  }
}
