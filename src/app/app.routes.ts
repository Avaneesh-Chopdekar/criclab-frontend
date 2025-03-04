import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LiveComponent } from './pages/live/live.component';
import { HistoryComponent } from './pages/history/history.component';
import { PointTableComponent } from './pages/point-table/point-table.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'live',
    component: LiveComponent,
  },
  {
    path: 'history',
    component: HistoryComponent,
  },
  {
    path: 'point-table',
    component: PointTableComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
