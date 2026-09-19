import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPANY_DATA } from '../../data/company.data';

@Component({
  selector: 'app-mobile-whatsapp-cta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mobile-whatsapp-cta.component.html',
  styleUrls: ['./mobile-whatsapp-cta.component.scss']
})
export class MobileWhatsappCtaComponent {
  companyData = COMPANY_DATA;

  onWhatsappClick() {
    window.open(this.companyData.whatsappUrl, '_blank');
  }
}
