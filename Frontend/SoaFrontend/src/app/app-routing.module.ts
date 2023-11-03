import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtudiantsComponent } from './Dashboard/CrudEtudiants/etudiants/etudiants.component';
import { NewEtudiantComponent } from './Dashboard/CrudEtudiants/new-etudiant/new-etudiant.component';
import { UpdateEtudiantComponent } from './Dashboard/CrudEtudiants/update-etudiant/update-etudiant.component';
import { EnseignantsComponent } from './Dashboard/CrudEnseignants/enseignants/enseignants.component';
import { NewEnseignantComponent } from './Dashboard/CrudEnseignants/new-enseignant/new-enseignant.component';
import { UpdateEnseignantComponent } from './Dashboard/CrudEnseignants/update-enseignant/update-enseignant.component';

const routes: Routes = [
  {path:'etudiants',component:EtudiantsComponent},
  {path:'new-etudiant', component: NewEtudiantComponent },
  {path:'update-etudiant/:id', component: UpdateEtudiantComponent },
  {path:'enseignants', component: EnseignantsComponent },
  {path:'new-enseignant', component: NewEnseignantComponent },
  {path:'update-enseignant/:id', component: UpdateEnseignantComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
