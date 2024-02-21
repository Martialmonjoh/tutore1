import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Member } from './inscription/inscription';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  private apiUrl = 'https://gestion-bibliotheques.onrender.com'; 

  constructor(private http: HttpClient) { }

  login(credentials: { login: string, password: string }): Observable<any> {
    return this.http.post("https://gestion-bibliotheques.onrender.com/gestionBiliotheques/v1.O/authentication/authenticate", credentials);
  }
  register(memberData: Member): Observable<any> {
    return this.http.post<any>("https://gestion-bibliotheques.onrender.com/gestionBiliotheques/v1.O/utilisateur/create", memberData);
  }
}
