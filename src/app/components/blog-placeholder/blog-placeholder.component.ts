import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { COMPANY_DATA } from '../../data/company.data';

@Component({
  selector: 'app-blog-placeholder',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './blog-placeholder.component.html',
  styleUrls: ['./blog-placeholder.component.scss']
})
export class BlogPlaceholderComponent {
  companyData = COMPANY_DATA;
}
