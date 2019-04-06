import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {

  public doughnutChartLabels = ['Sales 01', 'Sales 02', 'Sales, 03', 'Sales 04'];
  public doughnutChartData = [120, 158, 180, 90];
  public doughnutChartType = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

}
