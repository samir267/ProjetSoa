import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Etudiant } from 'src/app/Models/Etudiant';
import { EtudiantService } from 'src/app/Service/etudiant.service';

@Component({
  selector: 'app-new-etudiant',
  templateUrl: './new-etudiant.component.html',
  styleUrls: ['./new-etudiant.component.css']
})
export class NewEtudiantComponent {
  newEtudiant: Etudiant=new Etudiant();
  etudiantForm: FormGroup;
  submitted = false;

  constructor(private etudServ: EtudiantService,private router: Router,private fb: FormBuilder,
    private toastr: ToastrService) {

      this.etudiantForm = this.fb.group({
        nom: ['', [Validators.required]],
        prenom: ['', [Validators.required]],
        classe: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        adresse: ['', [Validators.required]],
        tel: ['', [Validators.required]],
      });



  }

  createNewEtudiant() {
    this.submitted = true;

    if (this.etudiantForm.valid) {

    this.etudServ.CreateNewEtudiant(this.etudiantForm.value).subscribe(
      (response: any) => {
        this.router.navigate(['/etudiants']);

      },
      (error: any) => {
      
        this.toastr.error('error',error.error );

      }
    );
  }
  }



}
