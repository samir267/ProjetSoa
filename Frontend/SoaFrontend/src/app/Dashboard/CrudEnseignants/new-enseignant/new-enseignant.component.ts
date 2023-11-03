import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Enseignant } from 'src/app/Models/Enseignant';
import { EnseignantService } from 'src/app/Service/enseignant.service';

@Component({
  selector: 'app-new-enseignant',
  templateUrl: './new-enseignant.component.html',
  styleUrls: ['./new-enseignant.component.css']
})
export class NewEnseignantComponent {

  newEnseignant:Enseignant=new Enseignant();
  constructor(private ensServ:EnseignantService,private router:Router){}

  CreateNewEnseignant(){
    this.ensServ.CreateNewEnseignant(this.newEnseignant).subscribe((res:any)=>{
      this.router.navigate(['/enseignants']);
    },(error:any)=>{console.log(error)})
  }

}
