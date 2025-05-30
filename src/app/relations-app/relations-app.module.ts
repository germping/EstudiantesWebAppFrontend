import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { RelationsAppService } from './services/relations-app.service';
import { RelationsAppComponent } from './pages/relations-app/relations-app.component';
import { ModalRelationsStudentsAppComponent } from './modales/modal-relations-students-app/modal-relations-students-app.component';
import { ModalRelationsTeachersAppComponent } from './modales/modal-relations-teachers-app/modal-relations-teachers-app.component';

@NgModule({
  declarations: [
    ModalRelationsStudentsAppComponent,
    ModalRelationsTeachersAppComponent,
    RelationsAppComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule
  ],
  providers: [RelationsAppService],
})
export class RelationsAppsModule { }
