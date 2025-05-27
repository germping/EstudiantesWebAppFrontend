import { Component, Inject, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ClassSubject } from '../../interfaces/class-subject';
import { ClassSubjectService } from '../../services/class-subject.service';
import { SharedService } from '../../../shared/shared.service';

@Component({
  selector: 'app-modal-class-subject',
  templateUrl: './modal-class-subject.component.html',
  styleUrl: './modal-class-subject.component.css'
})
export class ModalClassSubjectComponent implements OnInit {
  formClassSubject: FormGroup;
  title: string = 'Agregar Materia';
  nameButton: string = 'Guardar';

  constructor(private modal: MatDialogRef<ModalClassSubjectComponent>,
    @Inject(MAT_DIALOG_DATA) public datosClassSubject: ClassSubject,
    private fb: FormBuilder,
    private _classSubjectService: ClassSubjectService,
    private _sharedService: SharedService
  ) {
    this.formClassSubject = this.fb.group({
      title: ['', Validators.required],
      credits: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    if (this.datosClassSubject != null) {
      this.title = 'Editar Materia';
      this.nameButton = 'Actualizar';

      this.formClassSubject.patchValue({
        title: this.datosClassSubject.title,
        credits: this.datosClassSubject.credits
      });
    }
  }

  createUpdateClassSubject() {
    const classSubject: ClassSubject = {
      id: this.datosClassSubject != null ? this.datosClassSubject.id : 0,
      title: this.formClassSubject.value.title,
      credits: this.formClassSubject.value.credits
    };
    //Create
    if (this.datosClassSubject == null) {
      this._classSubjectService.create(classSubject).subscribe({
        next: (data) => {
          if (data.isSuccesful) {
            this._sharedService.showAlert('Materia creada correctamente', 'Completado');
            this.modal.close(true);
          }
          else {
            this._sharedService.showAlert('Error al crear materia', 'Error');
          }
        },
        error: (error) => {
          console.error(error);
          this._sharedService.showAlert('Error al crear la materia'+error, 'Error');
        }
      });
    }
    //Update
    else {
      this._classSubjectService.update(classSubject).subscribe({
        next: (data) => {
          if(data.isSuccesful) {
            this._sharedService.showAlert('Materia actualizada correctamente', 'Completado');
            this.modal.close(true);
          }
          else
          {
              this._sharedService.showAlert('Error al actualizar materia', 'Error');
          }
        },
        error: (error) => {
          console.error(error);
          this._sharedService.showAlert('Error al actualizar la materia', 'Error');
        }
      });

    }
  }


}
