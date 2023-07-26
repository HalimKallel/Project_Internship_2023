import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AgencyService } from 'src/app/services/agency.service';
import { Agency } from '../agency';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-aedagency',
  templateUrl: './aedagency.component.html',
  styleUrls: ['./aedagency.component.css']
})
export class AedagencyComponent implements OnInit{
  agencyForm: FormGroup;

  constructor(private _fb: FormBuilder, private agencyService: AgencyService, private _dialogRef: MatDialogRef<AedagencyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Agency) {
    this.agencyForm = this._fb.group({
      name: '',
      address: '',
      phonenumber: '',
      city: '',
    });
  }
  onCancel() {
    this._dialogRef.close();
  }

  ngOnInit(): void {
    this.agencyForm.patchValue(this.data);
  }
  onFormSubmit() {
    if(this.agencyForm.valid){
      if (this.data)
      {
        this.agencyService.updateagency(this.data.id, this.agencyForm.value).subscribe({
          next: (val: Agency) => {
            alert('Agency updated!');
            this._dialogRef.close(true);
          },
          error: (err: Agency) =>{
            console.error(err);
          },
        });
      }else {
        this.agencyService.addAgency(this.agencyForm.value).subscribe({
          next: (val: Agency) => {
            alert('Agency added successfully!');
            this._dialogRef.close(true);
          },
          error: (err: Agency) =>{
            console.error(err);
          },
        });
      }

    }
  }
}
