import { ScreeningService } from '../Screeningservice';
import { Screening } from '../Screening.model';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ScreeningReadMaterialDataSource } from './Screening-read-material-datasource';

@Component({
  selector: 'app-Screening-read-material',
  templateUrl: './Screening-read-material.component.html',
  styleUrls: ['./Screening-read-material.component.css']
})
export class ScreeningReadMaterialComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Screening>;
  dataSource: ScreeningReadMaterialDataSource;
  ScreeningService: ScreeningService

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'animalname'];

  ngOnInit() {
    this.dataSource = new ScreeningReadMaterialDataSource(this.ScreeningService);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
