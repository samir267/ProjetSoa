import { Component } from '@angular/core';
import { Etudiant } from 'src/app/Models/Etudiant';
import { EtudiantService } from 'src/app/Service/etudiant.service';

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.css']
})
export class EtudiantsComponent {
   search!:string;
   etud:Etudiant[]=[]

  constructor(private etudServ:EtudiantService){}

  ngOnInit(){
    this.getAll();
  }
  getAll(){
    this.etudServ.GetAllEtudiants().subscribe((res:any)=>{
      this.etud=res;

    },        (      error: any)=>{console.log(error)})

  }


  deleteEtudiant(id: number,nom:string) {
    if(confirm("Are you sure to delete "+nom)) {
    this.etudServ.DeleteEtudiant(id).subscribe(
      () => {
        console.log("Etudiant deleted successfully");
        this.getAll();
      },
      (error) => {
        console.error("Erreur lors de la suppression du Etudiant", error);
      }
    );
  }
}

generateAndDownloadCSV(etudiants: Etudiant[]) {
  const csvContent = this.convertArrayToCSV(etudiants);

  // Create a blob from the CSV content
  const blob = new Blob([csvContent], { type: 'text/csv' });

  // Create a download link and trigger the download
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'etudiants.csv';
  document.body.appendChild(a);
  a.click();
  window.URL.revokeObjectURL(url);
}

convertArrayToCSV(data: Etudiant[]): string {
  const header = ['ID', 'Nom', 'Prenom', 'Adresse', 'Tel', 'Classe', 'Email'];
  const rows = [header];

  for (const etudiant of data) {
    const row = [
      etudiant.id.toString(),
      etudiant.nom,
      etudiant.prenom,
      etudiant.adresse,
      etudiant.tel,
      etudiant.classe,
      etudiant.email
    ];
    rows.push(row);
  }

  return rows.map(row => row.join(',')).join('\n');
}


toggleAbsence(id: number) {
  // Toggle the 'absent' status on the server using your service
this.etudServ.absent(id).subscribe(res=>{
  console.log(res)
})


}
}
