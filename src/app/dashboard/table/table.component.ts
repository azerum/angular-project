import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";

import { StarWarsService } from "../../shared/star-wars.service";
import { Person } from "../../shared/start-wars-types";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit {
  @ViewChild(MatTable)
  private table!: MatTable<Person>;

  @ViewChild(MatPaginator)
  private paginator!: MatPaginator;

  public readonly columnsToDisplay = ['name'];
  public dataSource: MatTableDataSource<Person>;

  constructor(private starWarsService: StarWarsService) {
    this.dataSource = new MatTableDataSource<Person>();
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit(): void {
    this.starWarsService.getPeople().subscribe(response => {
      this.dataSource.data = response.results;
      this.table.renderRows();
    });
  }
}
