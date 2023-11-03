import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Enseignant } from 'src/app/Models/Enseignant';
import { EnseignantService } from 'src/app/Service/enseignant.service';

@Component({
  selector: 'app-update-enseignant',
  templateUrl: './update-enseignant.component.html',
  styleUrls: ['./update-enseignant.component.css']
})
export class UpdateEnseignantComponent {

  id!:number;
  ensData:Enseignant=new Enseignant();

  constructor(
    private route: ActivatedRoute,
    private ensServ: EnseignantService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id']; 

      this.loadEnseignantData();
    });
  }

  loadEnseignantData() {
    this.ensServ.GetById(this.id).subscribe(
      (response: any) => {
        this.ensData = response;
      },
      (error: any) => {
        console.error('Error loading Etudiant data:', error);
      }
    );
  }

  updateEnseignant(id: number,ensData:Enseignant): void {
    this.ensServ.UpdateEnseignant(id,ensData).subscribe(
      (response: any) => {
        this.router.navigate(['/enseignants']);
        console.log('Enseignant updated successfully:', response);
      },
      (error: any) => {
        console.error('Error updating Enseignant:', error);
      }
    );
  }
}
