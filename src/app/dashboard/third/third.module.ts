import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ThirdComponent } from './third.component';

const routes: Routes = [
  {
    path: '',
    component: ThirdComponent,
  },
];

@NgModule({
  declarations: [
    ThirdComponent,
  ],

  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ThirdModule { }
