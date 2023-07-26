import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CarrentalService } from 'src/app/services/carrental.service';
import { Carrental } from '../carrental';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-aedcarrental',
  templateUrl: './aedcarrental.component.html',
  styleUrls: ['./aedcarrental.component.css']
})
export class AedcarrentalComponent implements OnInit{
  carrentalForm: FormGroup;

  constructor(private _fb: FormBuilder, private carrentalService: CarrentalService, private _dialogRef: MatDialogRef<AedcarrentalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Carrental) {
    this.carrentalForm = this._fb.group({
      fullName: '',
      phoneNumber: '',
      registration: '',
      model: '',
      agency: '',
    });
  }
  onCancel() {
    this._dialogRef.close();
  }

  ngOnInit(): void {
    this.carrentalForm.patchValue(this.data);
  }
  onFormSubmit() {
    if(this.carrentalForm.valid){
      if (this.data)
      {
        this.carrentalService.updatecarrental(this.data.id, this.carrentalForm.value).subscribe({
          next: (val: Carrental) => {
            alert('Rental updated!');
            this._dialogRef.close(true);
          },
          error: (err: Carrental) =>{
            console.error(err);
          },
        });
      }else {
        this.carrentalService.addCarrental(this.carrentalForm.value).subscribe({
          next: (val: Carrental) => {
            alert('Rental added successfully!');
            this._dialogRef.close(true);
          },
          error: (err: Carrental) =>{
            console.error(err);
          },
        });
      }

    }
  }
}
