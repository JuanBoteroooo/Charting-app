import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent, canActivate: [AuthGuard], children: [
    { path: 'line-chart', loadChildren: () => import('./charts/line-chart/line-chart.module').then(m => m.LineChartModule) },
    { path: 'bar-chart', loadChildren: () => import('./charts/bar-chart/bar-chart.module').then(m => m.BarChartModule) },
    { path: 'pie-chart', loadChildren: () => import('./charts/pie-chart/pie-chart.module').then(m => m.PieChartModule) },
    { path: 'doughnut-chart', loadChildren: () => import('./charts/doughnut-chart/doughnut-chart.module').then(m => m.DoughnutChartModule) },
    { path: 'scatter-plot', loadChildren: () => import('./charts/scatter-plot/scatter-plot.module').then(m => m.ScatterPlotModule) },
    { path: 'radar-chart', loadChildren: () => import('./charts/radar-chart/radar-chart.module').then(m => m.RadarChartModule) }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
