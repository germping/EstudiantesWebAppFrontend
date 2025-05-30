import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule, Routes } from '@angular/router';
//import { DashboardStudentsComponent } from './dashboard-students/dashboard-students.component';
import { ListClassSubjectComponent } from '../class-subjects/pages/list-class-subject/list-class-subject.component';
import { ListUserAppComponent } from '../user-app/pages/list-user-app/list-user-app.component'; 
import { RelationsAppComponent } from '../relations-app/pages/relations-app/relations-app.component';

import {} from '../class-subjects/class-subjects.module'; 
import {} from '../user-app/user-app.module'; 
import {} from '../relations-app/relations-app.module';

const routes: Routes=[
  {
    path:'', 
    component: LayoutComponent, 
    children: [
      //{path:'dashboardStudent', component: DashboardStudentsComponent, pathMatch: 'full'},
      {path:'classSubjects', component: ListClassSubjectComponent, pathMatch: 'full'},
      {path:'userApp', component: ListUserAppComponent, pathMatch: 'full'},
      {path:'relations', component: RelationsAppComponent, pathMatch: 'full'},
      {path:'**', redirectTo:'', pathMatch: 'full'}
    ],
    //pathMatch: 'full'
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class LayoutRoutingModule { }
