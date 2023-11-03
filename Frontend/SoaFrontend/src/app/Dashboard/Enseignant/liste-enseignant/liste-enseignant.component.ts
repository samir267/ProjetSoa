import { Component } from '@angular/core';
import { Enseignant } from 'src/app/Models/Enseignant';
import { EnseignantService } from 'src/app/Service/enseignant.service';

@Component({
  selector: 'app-liste-enseignant',
  templateUrl: './liste-enseignant.component.html',
  styleUrls: ['./liste-enseignant.component.css']
})
export class ListeEnseignantComponent {
  search!:string;
  enseignant:Enseignant[]=[]
  constructor(private service:EnseignantService){}
  ngOnInit(){
    this.getAll();
  }
  getAll(){
    this.service.getAllEnseignants().subscribe((res:any)=>{
      console.log(res)
      this.enseignant=res;

    },        (      error: any)=>{console.log(error)})

  }
  deleteEnseignant(id: number,nom:string) {
    if(confirm("Are you sure to delete "+nom)) {
    this.service.deleteEnseignant(id).subscribe(
      () => {
        console.log("Enseignant deleted successfully");
        this.getAll();
      },
      (error) => {
        console.error("Erreur lors de la suppression du Enseignant", error);
      }
    );
  }
}
generateAndDownloadCSV(enseignants: Enseignant[]) {
  const csvContent = this.convertArrayToCSV(enseignants);

  // Create a blob from the CSV content
  const blob = new Blob([csvContent], { type: 'text/csv' });

  // Create a download link and trigger the download
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'enseignants.csv';
  document.body.appendChild(a);
  a.click();
  window.URL.revokeObjectURL(url);
}

convertArrayToCSV(data: Enseignant[]): string {
  const header = ['ID', 'Nom', 'Prénom', 'Adresse', 'Matière', 'Salaire', 'Email'];
  const rows = [header];

  for (const enseignant of data) {
    const row = [
      enseignant.id.toString(),
      enseignant.nom,
      enseignant.prenom,
      enseignant.adresse,
      enseignant.matiere,
      enseignant.salaire.toString(),
      enseignant.email
    ];
    rows.push(row);
  }

  return rows.map(row => row.join(',')).join('\n');
}

}
