import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Enseignant } from '../Models/Enseignant';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {
  private URL ="http://localhost:8087/"

  constructor(private http:HttpClient) { }

  GetAll():any{
    return this.http.get(this.URL+"enseignants/all");

  }

  CreateNewEnseignant(ens:Enseignant){
    return this.http.post(this.URL+"enseignants/create",ens);
  }

  DeleteEnseignant(id:number){
    return this.http.delete(this.URL+"enseignants/delete/"+id)
  }

  GetById(id :number){
    return this.http.get(this.URL+"enseignants/getById/"+id)
  }

  UpdateEnseignant(id: number,Enseignant:Enseignant) {
    return this.http.put(this.URL + "enseignants/update/" + id,Enseignant);
  }

}
