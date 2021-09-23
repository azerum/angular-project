import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import { DashboardComponent } from "./dashboard.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,

    children: [
      {
        path: 'first',
        loadChildren: () => import('./first/first.module').then(m => m.FirstModule),
      },

      {
        path: 'second',
        loadChildren: () => import('./second/second.module').then(m => m.SecondModule),
      },

      {
        path: 'third',
        loadChildren: () => import('./third/third.module').then(m => m.ThirdModule),
      },
    ],
  },
];

@NgModule({
  declarations: [
    DashboardComponent,
  ],

  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class DashboardModule { }
