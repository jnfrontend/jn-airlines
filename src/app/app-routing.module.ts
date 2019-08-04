import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './core/login/login.component';
import {DashboardComponent} from './core/dashboard/dashboard.component';
import {AuthGuard} from './core/services/auth.guard';
import {PageNotFoundComponent} from './core/page-not-found/page-not-found.component';

// Tablica Route's
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to Login
  { path: 'login', component: LoginComponent }, // Route to Login Components

  // #route-outlet STEP 3
  // Gdy ktos wejdzie na dashboard - przekierowuje go automatycznie na strone flights.
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'flights', pathMatch: 'full' },
      { path: 'flights', loadChildren: './flights/flights.module#FlightsModule' },
    ]
  },
  {path: '**', component: PageNotFoundComponent}
];

// Creating/Tworzenie Modules
@NgModule ({
  imports: [RouterModule.forRoot(routes)], // Module .forRoot - Rejestrowanie routes na glownym poziomie.
  exports: [RouterModule]
})

// Zapisujemy caly modul: app-routing.module.ts pod class: AppRoutingModule
export class AppRoutingModule {}
