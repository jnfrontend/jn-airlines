import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import {RouterModule} from '@angular/router'; // #route-outlet STEP 2B
import {MaterialModule} from '../material/material.module';
import {FormsModule} from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [DashboardComponent, LoginComponent, PageNotFoundComponent],
  exports: [DashboardComponent, LoginComponent] ,

  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule // #route-outlet STEP 2A
  ]
})
export class CoreModule { }
