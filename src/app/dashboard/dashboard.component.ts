import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  menuvisible: number =1

  constructor(private router:Router){}
  togglrmenu(id:number){
    if(this.menuvisible==id){
      this.menuvisible =0;
    } else{
      this.menuvisible= id;
    }
  }
  isActive(url:string):boolean{
    return this.router.isActive(url,true);
  }
}
