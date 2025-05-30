import { Component, Inject, OnInit } from '@angular/core';
import { Relations } from '../../interfaces/relations';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedService } from '../../../shared/shared.service';
import { RelationsAppService } from '../../services/relations-app.service';
import { UserApp } from '../../../user-app/interfaces/user-app';
import { UserAppService } from '../../../user-app/services/user-app.service';
import { ClassSubjectService } from '../../../class-subjects/services/class-subject.service';
import { ClassSubject } from '../../../class-subjects/interfaces/class-subject';

@Component({
  selector: 'app-modal-relations-students-app',
  templateUrl: './modal-relations-students-app.component.html',
  styleUrl: './modal-relations-students-app.component.css'
})
export class ModalRelationsStudentsAppComponent implements OnInit {
  dataUsers: UserApp[] = [];
  dataSubjects: ClassSubject[] = [];
  formrelation: FormGroup;
  title: string = 'Asociar Usuario con Materia';
  nameButton: string = 'Guardar';
  disableSelect: string = 'disabled';

  constructor(private _userAppService: UserAppService,  private _clasSubjectService: ClassSubjectService, private modal: MatDialogRef<ModalRelationsStudentsAppComponent>,
    @Inject(MAT_DIALOG_DATA) public datosrelation: Relations,
    private fb: FormBuilder,
    private _relationService: RelationsAppService,
    private _sharedService: SharedService
  ) {
    this.formrelation = this.fb.group({
      userId: ['', Validators.required],
      classSubjectId: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    
    if (this.datosrelation != null) {
      this.title = 'Editar Materia';
      this.nameButton = 'Actualizar';

      this.formrelation.patchValue({
        userId: this.datosrelation.userId,
        classSubjectId: this.datosrelation.classSubjectId
      });
    }
    this.getUserApps();
    this.getClassSubjects();
  }

  getUserApps() {
    this._userAppService.list().subscribe({
      next: (data) => {
        if (data.isSuccesful) {
          this.dataUsers = data.result;
        } else {
          this._sharedService.showAlert(
            "No data found",
            "No users were found.",
          );
        }
      },
      error: (e) => {

      }
    });
  }

  getClassSubjects() {
    this._clasSubjectService.list().subscribe({
      next: (data) => {
        if (data.isSuccesful) {
          this.dataSubjects = data.result;
        } else {
          this._sharedService.showAlert(
            "No data found",
            "No class subjects were found.",
          );
        }
      },
      error: (e) => {
        this._sharedService.showAlert(
            "No data found",
            "No class subjects were found."+e,
          );
      }
    });
  }

  createUpdateRelation() {
    const relation: Relations = {
      id: this.datosrelation.id != null ? this.datosrelation.id : 0,
      //id: 0,
      userId: this.formrelation.value.userId,
      classSubjectId: this.formrelation.value.classSubjectId,

    };
    //Create
    if (this.datosrelation == null) {
      this._relationService.create(relation).subscribe({
        next: (data) => {
          if (data.isSuccesful) {
            this._sharedService.showAlert('Relacion creada correctamente', 'Completado');
            this.modal.close(true);
          }
          else {
            this._sharedService.showAlert('Error al crear Relacion 1', 'Error: '+data.message);
          }
        },
        error: (error) => {
          console.error(error);
          this._sharedService.showAlert('Error al crear la Relacion 2' + error, 'Error');
        }
      });
    }
    //Update
    else {
      this._relationService.update(relation).subscribe({
        next: (data) => {
          if (data.isSuccesful) {
            this._sharedService.showAlert('Relación actualizada correctamente', 'Completado');
            this.modal.close(true);
          }
          else {
            this._sharedService.showAlert('Error al actualizar la relación', 'Error');
          }
        },
        error: (error) => {
          console.error(error);
          this._sharedService.showAlert('Error al actualizar la relación', 'Error');
        }
      });

    }
  }



}
