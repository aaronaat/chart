import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  public pieChartLabels = ['Sales 01', 'Sales 02', 'Sales, 03', 'Sales 04'];
  public pieChartData = [120, 158, 180, 90];
  public pieChartType = 'pie';


  constructor() { }

  ngOnInit() {
  }

}
