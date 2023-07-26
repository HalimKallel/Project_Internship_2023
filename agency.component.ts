import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AedagencyComponent } from './aedagency/aedagency.component';
import { AgencyService } from 'src/app/services/agency.service';
import { Agency } from './agency';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.css']
})
export class AgencyComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'address', 'phonenumber', 'city', 'action'];
  dataSource!: MatTableDataSource<Agency>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  static id: number;
  sort: any;
  constructor(private _dialog: MatDialog, private _agencyService: AgencyService) {}

  ngOnInit(): void {
    this.getAgencyList();
  }

  aedAgencyForm() {
    const DialogRef = this._dialog.open(AedagencyComponent);
    DialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getAgencyList();
        }
      }
    });
  }

  getAgencyList() {
    this._agencyService.getAgencyList().subscribe({
      next: (res: Agency[]) => {
        this.dataSource = new MatTableDataSource<Agency>(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteAgency(id: number) {
    this._agencyService.deleteAgency(id).subscribe(() => {
      alert ('Agency deleted');
      this.dataSource.data = this.dataSource.data.filter((agency: Agency) => agency.id !== id);
    });
  }
  editAgency(data: Agency) {
    const DialogRef =this._dialog.open(AedagencyComponent, {
      data,
    });
    DialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getAgencyList();
        }
      }
     })
   }
}
