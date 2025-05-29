import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedService } from '../../../shared/shared.service';
import { Teacher } from '../../interfaces/teacher';
import { TeacherService } from '../../services/teacher.service';

@Component({
  selector: 'app-modal-teacher',
  templateUrl: './modal-teacher.component.html',
  styleUrl: './modal-teacher.component.css'
})
export class ModalTeacherComponent implements OnInit {
  formTeacher: FormGroup;
  title: string = 'Agregar Profesor';
  nameButton: string = 'Guardar';

  constructor(private modal: MatDialogRef<ModalTeacherComponent>,
    @Inject(MAT_DIALOG_DATA) public datosTeacher: Teacher,
    private fb: FormBuilder,
    private _TeacherService: TeacherService,
    private _sharedService: SharedService
  ) {
    this.formTeacher = this.fb.group({
      username: ['', Validators.required],
      Email: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    if (this.datosTeacher != null) {
      this.title = 'Editar Profesor';
      this.nameButton = 'Actualizar';

      this.formTeacher.patchValue({
        username: this.datosTeacher.username,
        Email: this.datosTeacher.email
      });
    }
  }

  createUpdateTeacher() {
    const User: Teacher = {
      id: this.datosTeacher != null ? this.datosTeacher.id : 0,
      username: this.formTeacher.value.username,
      email: this.formTeacher.value.email,
      idProfile: 1
    };
    //Create
    if (this.datosTeacher == null) {
      this._TeacherService.create(User).subscribe({
        next: (data) => {
          if (data.isSuccesful) {
            this._sharedService.showAlert('Profesor creado correctamente', 'Completado');
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
      this._TeacherService.update(User).subscribe({
        next: (data) => {
          if(data.isSuccesful) {
            this._sharedService.showAlert('Materia actualizada correctamente', 'Completado');
            this.modal.close(true);
          }
          else
          {
              this._sharedService.showAlert('Error al actualizar profesor', 'Error');
          }
        },
        error: (error) => {
          console.error(error);
          this._sharedService.showAlert('Error al actualizar profesor', 'Error');
        }
      });

    }
  }


}

