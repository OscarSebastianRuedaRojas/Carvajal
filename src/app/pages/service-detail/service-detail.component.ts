import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { BreadcrumbsComponent, BreadcrumbItem } from '../../components/breadcrumbs/breadcrumbs.component';
import { SERVICES_DATA, COMPANY_DATA } from '../../data/company.data';
import { Service } from '../../models/service.model';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, BreadcrumbsComponent],
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.scss']
})
export class ServiceDetailComponent implements OnInit {
  service?: Service;
  companyData = COMPANY_DATA;
  allServices = SERVICES_DATA;
  breadcrumbItems: BreadcrumbItem[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private seoService: SeoService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const slug = params['slug'];
      const found = SERVICES_DATA.find(s => s.slug === slug);

      if (found) {
        this.service = found;
        this.breadcrumbItems = [
          { label: 'Servicios', url: '/' },
          { label: found.title }
        ];

        this.seoService.setSeoData(found.metaTitle, found.metaDescription);
        window.scrollTo(0, 0);
      } else {
        this.router.navigate(['/404']);
      }
    });
  }

  onWhatsappClick() {
    if (this.service) {
      const message = `Hola, quisiera recibir información sobre el servicio de ${this.service.title}.`;
      const url = `https://wa.me/570000000000?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    } else {
      window.open(this.companyData.whatsappUrl, '_blank');
    }
  }
}
