import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtudiantsComponent } from './Dashboard/CrudEtudiants/etudiants/etudiants.component';
import { NewEtudiantComponent } from './Dashboard/CrudEtudiants/new-etudiant/new-etudiant.component';
import { UpdateEtudiantComponent } from './Dashboard/CrudEtudiants/update-etudiant/update-etudiant.component';

const routes: Routes = [
  {path:'etudiants',component:EtudiantsComponent},
  {path:'new-etudiant', component: NewEtudiantComponent },
  {path:'update-etudiant/:id', component: UpdateEtudiantComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
