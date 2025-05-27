import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { ClassSubjectService } from './services/class-subject.service';
import { ListClassSubjectComponent } from './pages/list-class-subject/list-class-subject.component';
import { ModalClassSubjectComponent } from './modales/modal-class-subject/modal-class-subject.component';



@NgModule({
  declarations: [
    ListClassSubjectComponent,
    ModalClassSubjectComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule
  ],
  providers: [ClassSubjectService],
})
export class ClassSubjectsModule { }
