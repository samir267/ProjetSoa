import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Etudiant } from 'src/app/Models/Etudiant';
import { EtudiantService } from 'src/app/Service/etudiant.service';

@Component({
  selector: 'app-update-etudiant',
  templateUrl: './update-etudiant.component.html',
  styleUrls: ['./update-etudiant.component.css']
})
export class UpdateEtudiantComponent {
  id!: number;
  etudiantData: Etudiant =new Etudiant ();
  updatedEtudiant: Etudiant =new Etudiant ();

  constructor(
    private route: ActivatedRoute,
    private etudServ: EtudiantService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id']; 

      this.loadEtudiantData();
    });
  }

  loadEtudiantData() {
    this.etudServ.GetById(this.id).subscribe(
      (response: any) => {
        this.etudiantData = response;
      },
      (error: any) => {
        console.error('Error loading Etudiant data:', error);
      }
    );
  }


  updateEtudiant(id: number,etudiantData:Etudiant): void {
    console.log(etudiantData)
    this.etudServ.UpdateEtudiant(id,etudiantData).subscribe(
      (response: any) => {
        this.router.navigate(['/etudiants']);
        console.log('Etudiant updated successfully:', response);
      },
      (error: any) => {
        console.error('Error updating Etudiant:', error);
      }
    );
  }
}
