import { Component } from '@angular/core';
import { Enseignant } from 'src/app/Models/Enseignant';
import { EnseignantService } from 'src/app/Service/enseignant.service';

@Component({
  selector: 'app-enseignants',
  templateUrl: './enseignants.component.html',
  styleUrls: ['./enseignants.component.css']
})
export class EnseignantsComponent {


  constructor(private ensServ:EnseignantService){}
  ens:Enseignant[]=[];



  ngOnInit(){
    this.getAllEnseignants();
  }
  getAllEnseignants(){
    this.ensServ.GetAll().subscribe((res:any)=>{
      this.ens=res;

    },(error:any)=>{console.log(error)})
  }

  deleteEnseignant(id:number,nom:string){
    if(confirm("Are you sure to delete "+ nom)) {

    this.ensServ.DeleteEnseignant(id).subscribe((res:any)=>{
      console.log("Enseignant deleted successfully");
      this.getAllEnseignants(); 
    

    },
    (error) => {
      console.error("Erreur lors de la suppression de l'enseignant", error);
    })
  }
  }
}
