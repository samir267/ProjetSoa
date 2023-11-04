import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtudiantsComponent } from './Dashboard/CrudEtudiants/etudiants/etudiants.component';
import { NewEtudiantComponent } from './Dashboard/CrudEtudiants/etudiants/new-etudiant/new-etudiant.component';
import { UpdateEtudiantComponent } from './Dashboard/CrudEtudiants/etudiants/update-etudiant/update-etudiant.component';
import { ListeEnseignantComponent } from './Dashboard/Enseignant/liste-enseignant/liste-enseignant.component';
import { NewEnseignantComponent } from './Dashboard/Enseignant/new-enseignant/new-enseignant.component';
import { UpdateEnseignantComponent } from './Dashboard/Enseignant/update-enseignant/update-enseignant.component';
import { StatComponent } from './Dashboard/stat/stat.component';
import { AdminComponent } from './Dashboard/admin/admin/admin.component';

const routes: Routes = [
  {path:'etudiants',component:EtudiantsComponent},
  {path:'new-etudiant', component: NewEtudiantComponent },
  {path:'update-etudiant/:id', component: UpdateEtudiantComponent },
  {path:'enseignants',component:ListeEnseignantComponent},
  {path:'new-enseignant',component:NewEnseignantComponent},
  {path:'update-enseignant/:id',component:UpdateEnseignantComponent},

  {path:'stat',component:StatComponent},

  {path:'admin',component:AdminComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
