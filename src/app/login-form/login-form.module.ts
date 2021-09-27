import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { LoginFormComponent } from "./login-form.component";

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
