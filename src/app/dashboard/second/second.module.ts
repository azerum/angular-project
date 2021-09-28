import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
