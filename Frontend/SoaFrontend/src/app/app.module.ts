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

import { ToastrModule } from 'ngx-toastr';


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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    ToastrModule.forRoot()



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
