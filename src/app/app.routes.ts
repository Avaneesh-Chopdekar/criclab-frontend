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
    title: 'Home - CricLab',
  },
  {
    path: 'live',
    component: LiveComponent,
    title: 'Live Score - CricLab',
  },
  {
    path: 'history',
    component: HistoryComponent,
    title: 'Match History - CricLab',
  },
  {
    path: 'point-table',
    component: PointTableComponent,
    title: 'Point Table - CricLab',
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
