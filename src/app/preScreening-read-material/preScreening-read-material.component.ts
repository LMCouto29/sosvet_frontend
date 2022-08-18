import { PreScreeningService } from '../preScreeningservice';
import { PreScreening } from '../preScreening.model';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { PreScreeningReadMaterialDataSource } from './preScreening-read-material-datasource';

@Component({
  selector: 'app-preScreening-read-material',
  templateUrl: './preScreening-read-material.component.html',
  styleUrls: ['./preScreening-read-material.component.css']
})
export class PreScreeningReadMaterialComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<PreScreening>;
  dataSource: PreScreeningReadMaterialDataSource;
  preScreeningService: PreScreeningService

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'animalname'];

  ngOnInit() {
    this.dataSource = new PreScreeningReadMaterialDataSource(this.preScreeningService);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
