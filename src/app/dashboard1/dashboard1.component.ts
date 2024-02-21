import { Component } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-dashboard1',
  standalone: true,
  imports: [HeaderComponent,DashboardComponent],
  templateUrl: './dashboard1.component.html',
  styleUrl: './dashboard1.component.scss'
})
export class Dashboard1Component {

}
