import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CarService } from 'src/app/services/car.service';
import { Car } from '../car';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-aedcar',
  templateUrl: './aedcar.component.html',
  styleUrls: ['./aedcar.component.css']
})
export class AedcarComponent implements OnInit{
  carForm: FormGroup;

  constructor(private _fb: FormBuilder, private carService: CarService, private _dialogRef: MatDialogRef<AedcarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Car) {
    this.carForm = this._fb.group({
      registration: '',
      model: '',
      year: '',
      brand: '',
    });
  }
  onCancel() {
    this._dialogRef.close();
  }

  ngOnInit(): void {
    this.carForm.patchValue(this.data);
  }
  onFormSubmit() {
    if(this.carForm.valid){
      if (this.data)
      {
        this.carService.updatecar(this.data.id, this.carForm.value).subscribe({
          next: (val: Car) => {
            alert('Car updated!');
            this._dialogRef.close(true);
          },
          error: (err: Car) =>{
            console.error(err);
          },
        });
      }else {
        this.carService.addCar(this.carForm.value).subscribe({
          next: (val: Car) => {
            alert('Car added successfully!');
            this._dialogRef.close(true);
          },
          error: (err: Car) =>{
            console.error(err);
          },
        });
      }

    }
  }
}
