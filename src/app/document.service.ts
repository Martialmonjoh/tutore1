import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(private http: HttpClient) { }

  getListDocuments(){
    return this.http.get("https://gestion-bibliotheques.onrender.com/gestionBiliotheques/v1.O/ouvrages/all", { responseType: 'json' });
  }
}
