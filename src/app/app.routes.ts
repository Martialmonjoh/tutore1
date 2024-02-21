import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListeDocumentComponent } from './liste-document/liste-document.component';
import { ListeEmpruntComponent } from './liste-emprunt/liste-emprunt.component';
import { HeaderComponent } from './header/header.component';
import { AjouterDocumentComponent } from './ajouter-document/ajouter-document.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { AccueilComponent } from './accueil/accueil.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/liste-emprunt', pathMatch: 'full' },
  {
    path: 'inscription',
    component: InscriptionComponent
  },
  {
    path: 'header',
    component: HeaderComponent
  },
  {
    path: 'accueil',
    component: AccueilComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'dashboard1',
    component: Dashboard1Component
  },
  {
    path: 'liste-doc',
    component: ListeDocumentComponent
  },
  {
    path: 'liste-emprunt',
    component: ListeEmpruntComponent
  },
  {
    path: 'ajouter-doc',
    component: AjouterDocumentComponent
  }
];
