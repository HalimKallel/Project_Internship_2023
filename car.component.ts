import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AedcarComponent } from './aedcar/aedcar.component';
import { CarService } from 'src/app/services/car.service';
import { Car } from './car';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  displayedColumns: string[] = ['id', 'registration', 'model', 'year', 'brand', 'action'];
  dataSource!: MatTableDataSource<Car>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  static id: number;
  sort: any;
  constructor(private _dialog: MatDialog, private _carService: CarService) {}

  ngOnInit(): void {
    this.getCarList();
  }

  aedCarForm() {
    const DialogRef = this._dialog.open(AedcarComponent);
    DialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getCarList();
        }
      }
    });
  }

  getCarList() {
    this._carService.getCarList().subscribe({
      next: (res: Car[]) => {
        this.dataSource = new MatTableDataSource<Car>(res);
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

  deleteCar(id: number) {
    this._carService.deleteCar(id).subscribe(() => {
      alert ('Car deleted');
      this.dataSource.data = this.dataSource.data.filter((car: Car) => car.id !== id);
    });
  }
  editCar(data: Car) {
    const DialogRef =this._dialog.open(AedcarComponent, {
      data,
    });
    DialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getCarList();
        }
      }
     })
   }
}
