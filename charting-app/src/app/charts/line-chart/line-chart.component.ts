import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html'
})
export class LineChartComponent {
  public lineChartData: ChartConfiguration['data']['datasets'] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  ];

  public lineChartLabels: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: ChartOptions = {
    responsive: true,
  };

  public lineChartColors: Array<any> = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];

  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
}
