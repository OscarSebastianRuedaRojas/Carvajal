import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { COMPANY_DATA, SERVICES_DATA } from '../../data/company.data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  companyData = COMPANY_DATA;
  services = SERVICES_DATA;
  currentYear = new Date().getFullYear();
}
