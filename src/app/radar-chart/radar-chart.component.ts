import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.css']
})
export class RadarChartComponent implements OnInit {

  public radarChartLabels = ['01', '02', '03', '04','05', '06' ];
  public radarChartData = [
    {data: [120, 130, 25, 70, 300, 200], label: '2017'},
    {data: [225, 200, 200, 45, 150, 150], label: '2018'},
    {data: [90, 250, 170, 120, 50, 300], label: '2018'}
  ];
  public radarChartType = 'radar';

  constructor() { }

  ngOnInit() {
  }

}
