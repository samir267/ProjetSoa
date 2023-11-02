import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Etudiant } from 'src/app/Models/Etudiant';
import { EtudiantService } from 'src/app/Service/etudiant.service';

@Component({
  selector: 'app-new-etudiant',
  templateUrl: './new-etudiant.component.html',
  styleUrls: ['./new-etudiant.component.css']
})
export class NewEtudiantComponent {
  newEtudiant: Etudiant=new Etudiant();

  constructor(private etudServ: EtudiantService,private router: Router) {}

  createNewEtudiant() {
    this.etudServ.CreateNewEtudiant(this.newEtudiant).subscribe(
      (response: any) => {
        this.router.navigate(['/etudiants']);

      },
      (error: any) => {
        console.error(error);
      }
    );
  }


  

}
