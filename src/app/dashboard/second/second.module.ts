import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SecondComponent } from './second.component';

const routes: Routes = [
  {
    path: '',
    component: SecondComponent,
  },
];

@NgModule({
  declarations: [
    SecondComponent,
  ],

  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class SecondModule { }
