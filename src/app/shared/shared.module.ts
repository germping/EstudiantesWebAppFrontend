import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './layout/layout.component';
import { DashboardStudentsComponent } from './dashboard-students/dashboard-students.component';
import { MaterialModule } from '../material/material.module';
//import { AppRoutingModule } from '../app-routing.module';
import { LayoutRoutingModule } from './layout-routing.module';

@NgModule({
  declarations: [
    LayoutComponent,
    DashboardStudentsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    //AppRoutingModule,
    LayoutRoutingModule
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    LayoutComponent, DashboardStudentsComponent
  ]
})
export class SharedModule { }
