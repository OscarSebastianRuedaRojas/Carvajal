import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BreadcrumbsComponent, BreadcrumbItem } from '../../components/breadcrumbs/breadcrumbs.component';
import { COMPANY_DATA } from '../../data/company.data';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule, RouterLink, BreadcrumbsComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {
  companyData = COMPANY_DATA;
  breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Política de Privacidad' }
  ];

  constructor(private seoService: SeoService) {}

  ngOnInit() {
    this.seoService.setSeoData('Política de Privacidad y Protección de Datos', 'Política de privacidad, protección de datos personales y términos legales de Carvajal Contadores y Consultores.');
    window.scrollTo(0, 0);
  }
}
