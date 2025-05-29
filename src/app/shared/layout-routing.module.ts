import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardStudentsComponent } from './dashboard-students/dashboard-students.component';
import { ListClassSubjectComponent } from '../class-subjects/pages/list-class-subject/list-class-subject.component';
import { ListTeacherComponent } from '../teachers/pages/list-teacher/list-teacher.component';
import { ListUserAppComponent } from '../user-app/pages/list-user-app/list-user-app.component'; // Import if needed
import {} from '../class-subjects/class-subjects.module'; // Import the ClassSubjectsModule if needed
import {} from '../teachers/teachers.module'; // Import the ClassSubjectsModule if needed
import {} from '../user-app/user-app.module'; 

const routes: Routes=[
  {
    path:'', 
    component: LayoutComponent, 
    children: [
      {path:'dashboardStudent', component: DashboardStudentsComponent, pathMatch: 'full'},
      {path:'classSubjects', component: ListClassSubjectComponent, pathMatch: 'full'},
      {path:'teachers', component: ListTeacherComponent, pathMatch: 'full'},
      {path:'userApp', component: ListUserAppComponent, pathMatch: 'full'},
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
