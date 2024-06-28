import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts'; // Cambiar ChartsModule por NgChartsModule
import { LineChartComponent } from './line-chart/line-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { ScatterPlotComponent } from './scatter-plot/scatter-plot.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { ChartsRoutingModule } from './charts-routing.module';

@NgModule({
  declarations: [
    LineChartComponent,
    BarChartComponent,
    PieChartComponent,
    DoughnutChartComponent,
    ScatterPlotComponent,
    RadarChartComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule,
    ChartsRoutingModule
  ],
  exports: [
    LineChartComponent,
    BarChartComponent,
    PieChartComponent,
    DoughnutChartComponent,
    ScatterPlotComponent,
    RadarChartComponent
  ]
})
export class AppChartsModule { }
