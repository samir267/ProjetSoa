import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EtudiantsComponent } from './Dashboard/CrudEtudiants/etudiants/etudiants.component';
import { NewEtudiantComponent } from './Dashboard/CrudEtudiants/etudiants/new-etudiant/new-etudiant.component';
import { UpdateEtudiantComponent } from './Dashboard/CrudEtudiants/etudiants/update-etudiant/update-etudiant.component';
import { EtudiantPipe } from './pipes/etudiant.pipe';
import { ListeEnseignantComponent } from './Dashboard/Enseignant/liste-enseignant/liste-enseignant.component';
import { NewEnseignantComponent } from './Dashboard/Enseignant/new-enseignant/new-enseignant.component';
import { EnseignantPipe } from './pipes/enseignant.pipe';
import { UpdateEnseignantComponent } from './Dashboard/Enseignant/update-enseignant/update-enseignant.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { StatComponent } from './Dashboard/stat/stat.component';

import { NgChartsModule } from 'ng2-charts';
import { AdminComponent } from './Dashboard/admin/admin/admin.component';
@NgModule({
  declarations: [
    AppComponent,
    EtudiantsComponent,
    NewEtudiantComponent,
    UpdateEtudiantComponent,
    EtudiantPipe,
    ListeEnseignantComponent,
    NewEnseignantComponent,
    EnseignantPipe,
    UpdateEnseignantComponent,
    StatComponent,
    AdminComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    NgChartsModule




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
