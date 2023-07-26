import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  {LoginRoutingModule} from 'src/app/login/login-routing.module'
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    MenusideComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule,
    MatFormFieldModule
  ]
})
export class LoginModule { }
import { MatFormFieldModule } from '@angular/material/form-field';
import { MenusideComponent } from '../dashboard/menuside/menuside.component';