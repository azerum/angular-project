import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import { LoginFormComponent } from "./login-form.component";
import { FormsModule } from "@angular/forms";

const routes: Routes = [
  {
    path: '',
    component: LoginFormComponent,
  },
];

@NgModule({
  declarations: [
    LoginFormComponent,
  ],

  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
  ]
})
export class LoginFormModule { }
