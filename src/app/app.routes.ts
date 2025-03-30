import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LiveComponent } from './pages/live/live.component';
import { HistoryComponent } from './pages/history/history.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';
import { AuthGuard } from './guards/auth.guard';
import { IctPointTableComponent } from './pages/ict-point-table/ict-point-table.component';

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
    path: 'ict-points-table',
    component: IctPointTableComponent,
    title: 'ICT Points Table - CricLab',
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
    canActivate: [AuthGuard], // Apply authentication guard
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
