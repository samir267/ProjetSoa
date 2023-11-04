import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private soapUrl = 'http://localhost:8085/soap-api'; // Replace with your SOAP service URL

  constructor(private http: HttpClient) { }

  createAdmin(adminData: any) {
    // Convert the JavaScript object to a SOAP request payload (XML)
    const soapRequest = `<CreateAdminRequest>
                            <Nom>${adminData.nom}</Nom>
                            <Prenom>${adminData.nom}</Prenom>
                            <Email>${adminData.email}</Email>
                            <Tel>${adminData.tel}</Tel>
                          </CreateAdminRequest>`;

    // Set headers for the SOAP request
    const headers = new HttpHeaders({
      'Content-Type': 'text/xml'
    });

    // Make the SOAP request
    return this.http.post(this.soapUrl, soapRequest, { headers, responseType: 'text' });
  }
}
