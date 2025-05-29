import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { TeacherService } from './services/teacher.service';
import { ListTeacherComponent } from './pages/list-teacher/list-teacher.component';
import { ModalTeacherComponent } from './modales/modal-teacher/modal-teacher.component';



@NgModule({
  declarations: [
    ListTeacherComponent,
    ModalTeacherComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule
  ],
  providers: [TeacherService],
})
export class ClassSubjectsModule { }
