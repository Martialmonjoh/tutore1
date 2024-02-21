import { Component } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-ajouter-document',
  standalone: true,
  imports: [HeaderComponent,DashboardComponent],
  templateUrl: './ajouter-document.component.html',
  styleUrl: './ajouter-document.component.scss'
})
export class AjouterDocumentComponent {

}
