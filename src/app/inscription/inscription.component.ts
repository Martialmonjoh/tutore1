import { Component } from '@angular/core';
import { Member } from './inscription';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
1
@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.scss'
})
export class InscriptionComponent {
  memberFormData: Member = {
    email: '',
    id: 0,
    login: '',
    // roles: '',
    nom: '',
    photo: '',
    passWord: '',
  };
  
  // password: string = "";
  // matricule: string = "";
  // login: string = "";
  // picture: string = "";
  // name: string = "";
  // islogin = false;
  constructor(private auth: AuthService,public router: Router, private http: HttpClient) {}
  email = '';

  registerMember(): void {
    // const d = this.form.value;
    // const data = { ...d, roles: {"id":5, "nom": "ADHERENT"} };
    // console.log(data);
    // this.http.post('https://gestion-bibliotheques.onrender.com/gestionBiliotheques/v1.O/utilisateur/create', data)
    //   .subscribe(
    //     (response) => {
    //       console.log(response);
    //       alert("Votre compte a ete créer avec success, connectez-vous pour continuer");
    //       this.router.navigate(['/login']);
    //     },
    //     (error) => {
    //       console.log(error);
    //     }
    //   );
    const d = this.memberFormData;
    const data = {...d, roles:{"id":5 , "nom":"ADHERENT"}};
    // console.log(data)
    this.http.post('https://gestion-bibliotheques.onrender.com/gestionBiliotheques/v1.O/utilisateur/create', data)
      .subscribe(
        (response) => {
          console.log(response);
          alert("Votre compte a ete créer avec success, connectez-vous pour continuer");
          this.router.navigate(['/login']);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
