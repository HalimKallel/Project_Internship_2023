import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {MatButtonModule} from '@angular/material/button';
import { MenusideComponent } from '../dashboard/menuside/menuside.component';
import { ContactsComponent } from '../dashboard/contacts/contacts.component';
import { AgencyComponent } from './agency/agency.component';
import { CarrentalComponent } from './carrental/carrental.component';
import { SharedModule } from '../shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { AedcarComponent } from './car/aedcar/aedcar.component';
import { AedagencyComponent } from './agency/aedagency/aedagency.component';
import { AedcarrentalComponent } from './carrental/aedcarrental/aedcarrental.component';

@NgModule({
  declarations: [
    DashboardComponent,
    MenusideComponent,
    ContactsComponent,
    AgencyComponent,
    AedcarComponent,
    AedagencyComponent,
    AedcarrentalComponent,
    CarrentalComponent
    ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatButtonModule,
    SharedModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  exports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class DashboardModule { }