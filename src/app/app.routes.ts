import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LiveComponent } from './pages/live/live.component';
import { HistoryComponent } from './pages/history/history.component';
import { PointTableComponent } from './pages/point-table/point-table.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';

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
    path: 'points-table',
    component: PointTableComponent,
    title: 'Points Table - CricLab',
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login - CricLab',
  },
  {
    path: 'signup',
    component: SignupComponent,
    title: 'Signup - CricLab',
  },
  {
    path: 'admin-panel',
    component: AdminPanelComponent,
    title: 'Admin Panel - CricLab',
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
