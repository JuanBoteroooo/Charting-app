import { Component } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, ChartDataSets } from 'ng2-charts';

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html'
})
export class RadarChartComponent {
  public radarChartOptions: ChartOptions = {
    responsive: true,
  };

  public radarChartLabels: Label[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

  public radarChartData: ChartDataSets[] = [
    { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
  ];

  public radarChartType: ChartType = 'radar';
}
