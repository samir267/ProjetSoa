import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Etudiant } from '../Models/Etudiant';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  private URL =environment.apiUrl;
  constructor(private http:HttpClient) { }

  CreateNewEtudiant(Etudiant:Etudiant){
    return this.http.post(this.URL+"etudiants/create",Etudiant)
  }

  GetAllEtudiants():any{
    return this.http.get(this.URL+"etudiants/getAll")
  }

  UpdateEtudiant(id: number,Etudiant:Etudiant) {
    return this.http.put(this.URL + "etudiants/update/" + id,Etudiant);
  }


  GetById(id :number){
    return this.http.get(this.URL+"etudiants/getById/"+id)
  }

  DeleteEtudiant(id :number){
    return this.http.delete(this.URL+"etudiants/delete/"+id, {responseType : 'text'})
  }
  absent(id:number){
    return this.http.patch(this.URL+"etudiants/presence/"+id,{})
  }
}
