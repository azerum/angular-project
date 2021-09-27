import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";

import { TableComponent } from './table.component';

const routes: Routes = [
  {
    path: '',
    component: TableComponent
  }
];

@NgModule({
  declarations: [
    TableComponent
  ],

  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    MatPaginatorModule,
  ]
})
export class TableModule { }
