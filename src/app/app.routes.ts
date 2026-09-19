import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServiceDetailComponent } from './pages/service-detail/service-detail.component';
import { ThankYouComponent } from './pages/thank-you/thank-you.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'servicios/:slug', component: ServiceDetailComponent },
  { path: 'gracias', component: ThankYouComponent },
  { path: 'politica-de-privacidad', component: PrivacyPolicyComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent }
];
