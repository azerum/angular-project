import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { FirstComponent } from './first.component';

const routes: Routes = [
  {
    path: '',
    component: FirstComponent,
  },
];

@NgModule({
  declarations: [
    FirstComponent,
  ],

  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class FirstModule { }
