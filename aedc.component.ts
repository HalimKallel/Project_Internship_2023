import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CustomerService } from 'src/app/services/customer.service';
import { Cust } from '../cust';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-aedc',
  templateUrl: './aedc.component.html',
  styleUrls: ['./aedc.component.css']
})
export class AedcComponent implements OnInit{
  cusForm: FormGroup;

  constructor(private _fb: FormBuilder, private cusService: CustomerService, private _dialogRef: MatDialogRef<AedcComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Cust) {
    this.cusForm = this._fb.group({
      fullName: '',
      phoneNumber: '',
      email: '',
      dob: '',
      gender: '',
    });
  }
  onCancel() {
    this._dialogRef.close();
  }

  ngOnInit(): void {
    this.cusForm.patchValue(this.data);
  }
  onFormSubmit() {
    if(this.cusForm.valid){
      if (this.data)
      {
        this.cusService.updatecustomer(this.data.id, this.cusForm.value).subscribe({
          next: (val: Cust) => {
            alert('Customer updated!');
            this._dialogRef.close(true);
          },
          error: (err: Cust) =>{
            console.error(err);
          },
        });
      }else {
        this.cusService.addcustomer(this.cusForm.value).subscribe({
          next: (val: Cust) => {
            alert('Customer added successfully!');
            this._dialogRef.close(true);
          },
          error: (err: Cust) =>{
            console.error(err);
          },
        });
      }

    }
  }
}
