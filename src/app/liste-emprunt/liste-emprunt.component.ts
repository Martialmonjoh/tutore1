import { Component } from '@angular/core';
import { EmpruntService } from '../emprunt.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HeaderComponent } from '../header/header.component';
@Component({
  selector: 'app-liste-emprunt',
  standalone: true,
  imports: [FormsModule,CommonModule,DashboardComponent,HeaderComponent],
  templateUrl: './liste-emprunt.component.html',
  styleUrl: './liste-emprunt.component.scss'
})
export class ListeEmpruntComponent {

  listEmprunt: any[] = [];

  constructor(private emprunt: EmpruntService, private router: Router) {}

  ngOnInit(): void {
    this.getListEmprunts();
  }

  getListEmprunts(): void {
    this.emprunt.getListEmprunts().subscribe(
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
