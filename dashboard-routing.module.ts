import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CarComponent } from './car/car.component';
import { AgencyComponent } from './agency/agency.component';
import { CustomerComponent } from './customer/customer.component';
import { CarrentalComponent } from './carrental/carrental.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, children: [
    { path: 'contacts', component: ContactsComponent },
    {path : 'car', component:CarComponent},
    {path: 'agency', component:AgencyComponent},
    {path: 'customer', component:CustomerComponent},
    {path: 'carrental', component:CarrentalComponent},
    {path: 'login', component:LoginComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
