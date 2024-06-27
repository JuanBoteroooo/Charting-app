import { Component } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color } from 'ng2-charts';

@Component({
  selector: 'app-scatter-plot',
  templateUrl: './scatter-plot.component.html'
})
export class ScatterPlotComponent {
  public scatterChartOptions: ChartOptions = {
    responsive: true,
  };

  public scatterChartData: ChartDataSets[] = [
    {
      data: [
        { x: -10, y: 0 },
        { x: 0, y: 10 },
        { x: 10, y: 5 },
        { x: 0.5, y: 5.5 },
      ],
      label: 'Series A',
      pointRadius: 10,
    },
  ];

  public scatterChartType: ChartType = 'scatter';
}
