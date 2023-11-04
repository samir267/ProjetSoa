import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Enseignant } from '../Models/Enseignant';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EnseignantService {
  private baseUrl = "http://localhost:8085/";

  constructor(private http: HttpClient) {}

  getAllEnseignants(): Observable<Enseignant[]> {
    return this.http.get<Enseignant[]>(`${this.baseUrl}/enseignants/all`);
  }

  getEnseignantById(id: number): Observable<Enseignant> {
    return this.http.get<Enseignant>(`${this.baseUrl}/enseignants/${id}`);
  }

  createEnseignant(enseignant: Enseignant): Observable<Enseignant> {
    return this.http.post<Enseignant>(`${this.baseUrl}/enseignants/create`, enseignant);
  }

  updateEnseignant(id: number, enseignant: Enseignant): Observable<Enseignant> {
    return this.http.put<Enseignant>(`${this.baseUrl}/enseignants/update/${id}`, enseignant);
  }

  deleteEnseignant(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/enseignants/delete/${id}`);
  }
  countEtudiants(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}enseignants/count`);
  }
}
