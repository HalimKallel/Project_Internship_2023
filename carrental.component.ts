import { Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { AedcarrentalComponent } from './aedcarrental/aedcarrental.component';
import { Carrental } from './carrental'; 
import { MatDialog } from '@angular/material/dialog';
import { CarrentalService } from 'src/app/services/carrental.service';

@Component({
  selector: 'app-carrental',
  styleUrls: ['./carrental.component.css'],
  templateUrl: './carrental.component.html',
})
export class CarrentalComponent implements OnInit {
  displayedColumns: string[] = ['id', 'fullName', 'phoneNumber', 'registration', 'model', 'agency', 'action'];
  dataSource!: MatTableDataSource<Carrental>; 

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  sort: any;
  static id: number;
  constructor(private _dialog: MatDialog, private _carrentalService: CarrentalService) {}

  ngOnInit(): void {
    this.getCarrentalList();
  }

  
  aedCarrentalForm() {
   const DialogRef = this._dialog.open(AedcarrentalComponent);
   DialogRef.afterClosed().subscribe({
    next: (val) => {
      if (val) {
        this.getCarrentalList();
      }
    }
   })
  }

  getCarrentalList() {
    this._carrentalService.getCarrentalList().subscribe({
      next: (res: Carrental[]) => { 
        this.dataSource = new MatTableDataSource<Carrental>(res);
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

  deleteCarrental(id: number) {
    this._carrentalService.deleteCarrental(id).subscribe(() => {
      alert ('Rental deleted');
      this.dataSource.data = this.dataSource.data.filter((carrental: Carrental) => carrental.id !== id);
    });
  }
  editCarrental(data: Carrental) {
    const DialogRef =this._dialog.open(AedcarrentalComponent, {
      data,
    });
    DialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getCarrentalList();
        }
      }
     })
   }
}
