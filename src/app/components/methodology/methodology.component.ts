import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPANY_DATA } from '../../data/company.data';
import { MethodologyStep } from '../../models/company.model';

@Component({
  selector: 'app-methodology',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './methodology.component.html',
  styleUrls: ['./methodology.component.scss']
})
export class MethodologyComponent {
  steps: MethodologyStep[] = COMPANY_DATA.methodologySteps;
}
