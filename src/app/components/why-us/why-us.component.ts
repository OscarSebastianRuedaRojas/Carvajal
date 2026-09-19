import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPANY_DATA } from '../../data/company.data';
import { ValueProposition } from '../../models/company.model';

@Component({
  selector: 'app-why-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './why-us.component.html',
  styleUrls: ['./why-us.component.scss']
})
export class WhyUsComponent {
  companyData = COMPANY_DATA;
  values: ValueProposition[] = COMPANY_DATA.valuePropositions;
}
