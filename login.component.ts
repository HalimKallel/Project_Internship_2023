import { Component } from '@angular/core';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username!:string;
  password!:string;
  hidePassword: boolean = true;

  constructor(private router:Router, private snackBar: MatSnackBar){

  }


  gotoDashbord():void{
    

    if ((this.username=='halim') && (this.password=='1234')){

    this.router.navigateByUrl('/dashboard')

    }
  }
  showSnackBar() {
    const username = 'halim';
    const password = '1234'; 
  
    if (this.username !== username || this.password !== password) {
      this.snackBar.open('Invalid username or password', 'Close', {
        duration: 2000
      });
    } else {
      this.gotoDashbord();
    }
  }
  

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }  

}
