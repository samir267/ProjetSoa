import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { EnseignantService } from 'src/app/Service/enseignant.service';
import { EtudiantService } from 'src/app/Service/etudiant.service';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})
export class StatComponent {
  public pieChart: any;
  public doughnutChart: any;
  public etudient!:number;
  public enseignant!:number;

constructor(private etudeS:EtudiantService,private ensS:EnseignantService){}
  ngOnInit(): void {

    this.createPieChart();
    this.createDoughnutChart();
    this.getSTatEtudiant();
    this.getSTatEnseignant();
    this.presence();
  }
getSTatEtudiant(){

  this.etudeS.countEtudiants().subscribe(res=>{
    this.etudient=res;
    console.log(this.etudient,"hhhhhh")
    this.doughnutChart.data.datasets[0].data[0] = this.etudient;
    // Then, update the chart to reflect the changes
    this.doughnutChart.update();

  })
}
getSTatEnseignant(){

  this.ensS.countEtudiants().subscribe(res=>{
    this.enseignant=res;
    this.doughnutChart.data.datasets[0].data[1] = this.enseignant;
    // Then, update the chart to reflect the changes
    this.doughnutChart.update();

  })
}
presence() {

    this.etudeS.calculateAbsentPercentage().subscribe((result) => {
      // Extract the 'absent' and 'present' values from the result
      const absent = result.absent;
      const present = result.present;

      // Update the data for the pie chart
      this.pieChart.data.datasets[0].data = [absent, present];
      this.pieChart.update();
    });

}
  createPieChart() {
    this.pieChart = new Chart("MyPieChart", {
      type: 'pie',
      data: {
        labels: ['Absence', 'Presence'],
        datasets: [{
          data: [300, 240],
          backgroundColor: ['pink', 'blue'],
          hoverOffset: 4
        }],
      },
      options: {
        aspectRatio: 2.5
      }
    });
  }

  createDoughnutChart() {
    this.doughnutChart = new Chart("MyDoughnutChart", {
      type: 'doughnut',
      data: {
        labels: ['Etudiant', 'Enseignant', 'Cadre Administratif'],
        datasets: [{
          data: [this.etudient, this.enseignant, 4],
          backgroundColor: ['#0E78E0', '#28AF6F', '#00E6C3'],
          hoverOffset: 4
        }],
      },
      options: {
        aspectRatio: 2.5
      }
    });
  }

}
