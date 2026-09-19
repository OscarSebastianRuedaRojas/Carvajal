import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPANY_DATA } from '../../data/company.data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  companyData = COMPANY_DATA;

  onWhatsappClick() {
    window.open(this.companyData.whatsappUrl, '_blank');
  }
}
