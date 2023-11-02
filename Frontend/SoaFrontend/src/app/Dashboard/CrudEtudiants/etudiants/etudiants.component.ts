import { Component } from '@angular/core';
import { Etudiant } from 'src/app/Models/Etudiant';
import { EtudiantService } from 'src/app/Service/etudiant.service';

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.css']
})
export class EtudiantsComponent {

  constructor(private etudServ:EtudiantService){}

  ngOnInit(){
    this.getAll();
  }
  etud:Etudiant[]=[]
  getAll(){
    this.etudServ.GetAllEtudiants().subscribe((res:any)=>{
      this.etud=res;

    },        (      error: any)=>{console.log(error)})
    
  }


  deleteEtudiant(id: number,nom:string) {
    if(confirm("Are you sure to delete "+nom)) {
    this.etudServ.DeleteEtudiant(id).subscribe(
      () => {
        console.log("Etudiant deleted successfully");
        this.getAll(); 
      },
      (error) => {
        console.error("Erreur lors de la suppression du Etudiant", error);
      }
    );
  }
}



}
