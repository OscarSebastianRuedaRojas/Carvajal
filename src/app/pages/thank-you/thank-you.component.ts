import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { COMPANY_DATA } from '../../data/company.data';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-thank-you',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent implements OnInit {
  companyData = COMPANY_DATA;

  constructor(private seoService: SeoService) {}

  ngOnInit() {
    this.seoService.setSeoData('Gracias por su mensaje', 'Confirmación de contacto con Carvajal Contadores y Consultores.');
  }

  onWhatsappClick() {
    window.open(this.companyData.whatsappUrl, '_blank');
  }
}
