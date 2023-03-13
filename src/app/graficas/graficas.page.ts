import { AfterViewInit, 
  Component, 
  ElementRef,OnInit, ViewChild } from '@angular/core';
//npm i chart.js --save
import { Chart } from 'chart.js/auto';
import { RealtimeDatabaseService } from '../services/realtime-database.service';
@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.page.html',
  styleUrls: ['./graficas.page.scss'],
})
export class GraficasPage implements OnInit, AfterViewInit {
  // Importing ViewChild. We need @ViewChild decorator to get a reference to the local variable 
  // that we have added to the canvas element in the HTML template.
  @ViewChild('doughnutCanvas') private doughnutCanvas!: ElementRef;
  @ViewChild('lineCanvas') private lineCanvas!: ElementRef;
  doughnutChart: any;
  lineChart: any;
  data: any;
  private chart: Chart;

  constructor(private dataService: RealtimeDatabaseService) {
  
  }

  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      this.data = data;
      this.doughnutChartMethod();
      this.lineChartMethod();
    });
  }
  
  ngAfterViewInit() {
    this.dataService.getData().subscribe(data => {
      this.data = data;
      this.doughnutChartMethod();
      this.lineChartMethod();
    });
  }
  doughnutChartMethod() {
    if (this.doughnutChart) {
      console.log('algo-|', this.chart)
      this.doughnutChart.destroy(); // Elimina la instancia anterior
    }
    let datos = this.data.historial_temperatura
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: Object.keys(datos.historico),
        datasets: [{
          label: datos.tittle,
          data: Object.values(datos.historico),
          backgroundColor: [
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
          ],
          hoverBackgroundColor: [
            '#FFCE56',
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#FF6384'
          ]
        }]
      }
    });
  }
  lineChartMethod() {
    if (this.lineChart) {
      this.lineChart.destroy(); // Elimina la instancia anterior
    }
    let datos = this.data.historial_temperatura
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: Object.keys(datos.historico),
        datasets: [
          {
            label: datos.tittle,
            fill: false,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: Object.values(datos.historico),
            spanGaps: false,
          }
        ]
      }
    });
  }

  
}