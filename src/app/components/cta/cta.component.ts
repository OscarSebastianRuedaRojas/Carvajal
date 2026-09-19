import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPANY_DATA } from '../../data/company.data';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.scss']
})
export class CtaComponent {
  companyData = COMPANY_DATA;

  onWhatsappClick() {
    window.open(this.companyData.whatsappUrl, '_blank');
  }
}
