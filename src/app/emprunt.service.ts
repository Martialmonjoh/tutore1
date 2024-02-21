import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpruntService {

  constructor(private http: HttpClient) { }

  getListEmprunts(){
    return this.http.get("https://gestion-bibliotheques.onrender.com/gestionBiliotheques/v1.O/emprunt/all", { responseType: 'json' });
  }
}
