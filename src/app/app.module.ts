import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { AuthGuard } from "./shared/auth.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },

  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [AuthGuard],
  },

  {
    path: 'login',
    loadChildren: () => import('./login-form/login-form.module').then(m => m.LoginFormModule),
  },
];

@NgModule({
  declarations: [
    AppComponent,
  ],

  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
