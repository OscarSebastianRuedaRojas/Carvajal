import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPANY_DATA } from '../../data/company.data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  companyData = COMPANY_DATA;

  onWhatsappClick() {
    window.open(this.companyData.whatsappUrl, '_blank');
  }
}
