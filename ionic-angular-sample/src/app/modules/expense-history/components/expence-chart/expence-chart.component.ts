import { DatePipe } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
@Component({
  selector: 'app-expence-chart',
  templateUrl: './expence-chart.component.html',
  styleUrls: ['./expence-chart.component.scss'],
})
export class ExpenceChartComponent implements AfterViewInit {
  @ViewChild('barCanvas') private barCanvas: ElementRef;

  barChart: any;
  doughnutChart: any;
  lineChart: any;

  constructor(private datePipe: DatePipe) { }

  ngAfterViewInit() {
    this.barChartMethod();
  }

  getPastDays(){
    var curr = new Date();
    var yData = [];
    var first = curr.getDate()- curr.getDay();
    for(var i = 0; i<6;i++){
      var cdate = new Date(curr.setDate(first + i));
      yData.push(this.datePipe.transform(cdate, 'dd/MM'))
    }
    return yData;
  }

  getPastIncome(){
    return ['2000', '1000', '4000','5000','6000','500']
  }

  barChartMethod() {
    this.barChart  = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
          labels: this.getPastDays(),
          datasets: [{
              label: '# income',
              data: this.getPastIncome(),
              backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
              ],
              borderColor: [
                'rgba(75, 192, 192, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(75, 192, 192, 1)',
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
  }




}
