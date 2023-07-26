import { Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { AedcComponent } from './aedc/aedc.component';
import { Cust } from './cust'; 
import { CustomerService } from 'src/app/services/customer.service';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-customer',
  styleUrls: ['./customer.component.css'],
  templateUrl: './customer.component.html',
})
export class CustomerComponent implements OnInit {
  displayedColumns: string[] = ['id', 'fullName', 'phoneNumber', 'email', 'dob', 'gender', 'action'];
  dataSource!: MatTableDataSource<Cust>; 

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  sort: any;
  static id: number;
  constructor(private _dialog: MatDialog, private _custService: CustomerService) {}

  ngOnInit(): void {
    this.getCustomerList();
  }

  
  openAddEditDelCusForm() {
   const DialogRef = this._dialog.open(AedcComponent);
   DialogRef.afterClosed().subscribe({
    next: (val) => {
      if (val) {
        this.getCustomerList();
      }
    }
   })
  }

  getCustomerList() {
    this._custService.getCustomerList().subscribe({
      next: (res: Cust[]) => { 
        this.dataSource = new MatTableDataSource<Cust>(res);
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

  deleteCustomer(id: number) {
    this._custService.deleteCustomer(id).subscribe(() => {
      alert ('Customer deleted');
      this.dataSource.data = this.dataSource.data.filter((customer: Cust) => customer.id !== id);
    });
  }
  editCustomer(data: Cust) {
    const DialogRef =this._dialog.open(AedcComponent, {
      data,
    });
    DialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getCustomerList();
        }
      }
     })
   }
}




