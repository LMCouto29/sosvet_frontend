import { AnimalService } from '../animal.service';
import { Animal } from '../animal.model';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { AnimalReadMaterialDataSource } from './animal-read-material-datasource';

@Component({
  selector: 'app-animal-read-material',
  templateUrl: './animal-read-material.component.html',
  styleUrls: ['./animal-read-material.component.css']
})
export class AnimalReadMaterialComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Animal>;
  dataSource: AnimalReadMaterialDataSource;
  animalService: AnimalService

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'price'];

  ngOnInit() {
    this.dataSource = new AnimalReadMaterialDataSource(this.animalService);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
