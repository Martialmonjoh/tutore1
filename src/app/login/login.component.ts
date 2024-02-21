import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email= "";
  password= "";
  islogin = false;

  constructor(private auth: AuthService,public router: Router) { }

  login(): void {
    this.islogin = true;

    const credentials = { login: this.email, password: this.password };

    this.auth.login(credentials).subscribe(
      (response) => {
        this.islogin = false;
        console.log('Connexion réussie', response);
        this.router.navigateByUrl('/inscription');
      },
      (error) => {
        if (error.status === 403) {
          console.error('Accès refusé. Vérifiez vos informations d\'identification ou vos autorisations.');
        } else {
          console.error('Erreur de connexion', error);
        }
      }
    );
  }
}
