import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule, DatePipe } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { ScrollContainerComponent } from '../scroll-container/scroll-container.component';

export interface UserData {
  Client_Name: string;
  Countries: string;
  Entries: string;
  Professionals: string;
  Employees: string;
  Contract_Start: Date;
  Contract_End: Date;
  Status: string
}

/** Constants used to fill up our data base. */
const NAMES: string[] = [
  '101 Test Client',
  'Test Client',
  'AAA Client',
  'Atticus',
  'Amelia',
  'Jack'
];

@Component({
  selector: 'app-table',
  templateUrl: 'table.component.html',
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatIconModule, DatePipe, MatMenuModule, MatButtonModule, CommonModule, ScrollContainerComponent],
  standalone: true,
})
export class TableComponent implements AfterViewInit {

  constructor() {
    // Create 100 users
    const users = Array.from({ length: this.length }, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);


  }
  handleScroll($event: boolean) {
    $event ? this.getData() : this._noop();

  }
  hasMore = () => !this.dataSource || this.dataSource.data.length < this.limit;

  _noop(): void {
  }

  getData() {
    this.length = this.length + 10;
    const users = Array.from({ length: this.length }, (_, k) => createNewUser(k + 1));
    this.dataSource = new MatTableDataSource(users);
    this.count = users.length;
  }

  limit: number = 1000;
  full: boolean = true;
  length: number = 100;
  displayedColumns: string[] = ['Client Name', 'Countries', 'Entries', 'Professionals', 'Employees', 'Contract Start', 'Contract End', 'Status', 'Star'];
  dataSource: MatTableDataSource<UserData>;
  count: number = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    if (this.dataSource) {
      this.dataSource.filter = filterValue.trim().toLowerCase();

      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }

  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';

  return {
    Client_Name: name,
    Countries: Math.round(Math.random() * 10).toString(),
    Entries: Math.round(Math.random() * 10).toString(),
    Professionals: Math.round(Math.random() * 10).toString(),
    Employees: Math.round(Math.random() * 10).toString(),
    Contract_Start: new Date('9/6/2024'),
    Contract_End: new Date('10/12/2024'),
    Status: Math.round(Math.random() * 10).toString() > '2' ? 'check_circle' : 'radio_button_unchecked'
  };

}


