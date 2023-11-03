import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EnseignantService } from 'src/app/Service/enseignant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-enseignant',
  templateUrl: './new-enseignant.component.html',
  styleUrls: ['./new-enseignant.component.css']
})
export class NewEnseignantComponent {
  enseignantForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder,private route:Router,private service:EnseignantService){
    this.enseignantForm = this.fb.group({
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      matiere: ['', [Validators.required]],
      adresse: ['', [Validators.required]],
      salaire: [null, [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      tel: ['', [Validators.required]],
    });

  }
  createNewEnseignant(){
    this.submitted = true;

    if (this.enseignantForm.valid) {
     this.service.createEnseignant(this.enseignantForm.value).subscribe(res=>{
      console.log(res)
      this.route.navigate(['/enseignants']);
    },error=>{
      console.log(error.error.message);
     }
     )
    }
  }
}
