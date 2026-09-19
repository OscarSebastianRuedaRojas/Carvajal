import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private defaultTitle = 'Carvajal Contadores y Consultores | Soluciones Financieras Estratégicas';
  private defaultDescription = 'Carvajal Contadores y Consultores ofrece consultoría financiera, auditoría, revisoría fiscal, planeación tributaria y soluciones estratégicas para empresas.';

  constructor(
    private titleService: Title,
    private metaService: Meta
  ) {}

  setSeoData(title?: string, description?: string) {
    const pageTitle = title ? `${title} | Carvajal Contadores y Consultores` : this.defaultTitle;
    const pageDesc = description || this.defaultDescription;

    this.titleService.setTitle(pageTitle);
    this.metaService.updateTag({ name: 'description', content: pageDesc });
    this.metaService.updateTag({ property: 'og:title', content: pageTitle });
    this.metaService.updateTag({ property: 'og:description', content: pageDesc });
    this.metaService.updateTag({ name: 'twitter:title', content: pageTitle });
    this.metaService.updateTag({ name: 'twitter:description', content: pageDesc });
  }
}
