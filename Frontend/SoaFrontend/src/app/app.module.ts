import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EtudiantsComponent } from './Dashboard/CrudEtudiants/etudiants/etudiants.component';
import { NewEtudiantComponent } from './Dashboard/CrudEtudiants/new-etudiant/new-etudiant.component';
import { UpdateEtudiantComponent } from './Dashboard/CrudEtudiants/update-etudiant/update-etudiant.component';
import { EnseignantsComponent } from './Dashboard/CrudEnseignants/enseignants/enseignants.component';
import { NewEnseignantComponent } from './Dashboard/CrudEnseignants/new-enseignant/new-enseignant.component';
import { UpdateEnseignantComponent } from './Dashboard/CrudEnseignants/update-enseignant/update-enseignant.component';



@NgModule({
  declarations: [
    AppComponent,
    EtudiantsComponent,
    NewEtudiantComponent,
    UpdateEtudiantComponent,
    EnseignantsComponent,
    NewEnseignantComponent,
    UpdateEnseignantComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
