import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DocumentService } from '../document.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-liste-document',
  standalone: true,
  imports: [FormsModule,CommonModule,HeaderComponent,DashboardComponent],
  templateUrl: './liste-document.component.html',
  styleUrl: './liste-document.component.scss'
})
export class ListeDocumentComponent {
  listEmprunt: any[] = [];

  constructor(private emprunt: DocumentService, private router: Router) {}

  ngOnInit(): void {
    this.getListDocuments();
  }

  getListDocuments(): void {
    this.emprunt.getListDocuments().subscribe(
      (rep: any) => {
        console.log(rep);
        this.listEmprunt = rep;
        console.log("Operation completed successfully", rep);
      },
      (err) => {
        //console.log("Operation failed", err);
      }
    );
  }
}
