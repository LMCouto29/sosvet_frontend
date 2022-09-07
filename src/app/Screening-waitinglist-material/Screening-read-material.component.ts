import { ScreeningService } from '../Screeningservice';
import { Screening } from '../Screening.model';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ScreeningReadMaterialDataSource } from './Screening-waitinglist-material-datasource';

@Component({
  selector: 'app-Screening-waitinglist-material',
  templateUrl: './Screening-waitinglist-material.component.html',
  styleUrls: ['./Screening-waitinglist-material.component.css']
})
export class ScreeningwaitinglistMaterialComponent implements AfterViewInit, OnInit {
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
