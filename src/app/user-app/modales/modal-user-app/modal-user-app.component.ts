import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserApp } from '../../../user-app/interfaces/user-app';
import { UserAppService } from '../../../user-app/services/user-app.service';
import { SharedService } from '../../../shared/shared.service';

@Component({
  selector: 'app-modal-user-app',
  templateUrl: './modal-user-app.component.html',
  styleUrl: './modal-user-app.component.css'
})
export class ModalUserAppComponent implements OnInit {
  formUserApp: FormGroup;
  title: string = 'Actualizar Usuario';
  nameButton: string = 'Guardar';

  constructor(private modal: MatDialogRef<ModalUserAppComponent>,
    @Inject(MAT_DIALOG_DATA) public datosUserApp: UserApp,
    private fb: FormBuilder,
    private _UserAppService: UserAppService,
    private _sharedService: SharedService
  ) {
    this.formUserApp = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      idProfile: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    if (this.datosUserApp != null) {
      this.title = 'Editar Usuario';
      this.nameButton = 'Actualizar';

      this.formUserApp.patchValue({
        username: this.datosUserApp.username,
        email: this.datosUserApp.email,
        idProfile: this.datosUserApp.idProfile
      });
    }
  }

  createUpdateUserApp() {
    const UserApp: UserApp = {
      id: this.datosUserApp != null ? this.datosUserApp.id : 0,
      username: this.formUserApp.value.username,
      email: this.formUserApp.value.email,
      idProfile: this.formUserApp.value.idProfile
    };
    //Create
    if (this.datosUserApp == null) {
      this._UserAppService.create(UserApp).subscribe({
        next: (data) => {
          if (data.isSuccesful) {
            this._sharedService.showAlert('Usuario creado correctamente', 'Completado');
            this.modal.close(true);
          }
          else {
            this._sharedService.showAlert('Error al crear usuario', 'Error');
          }
        },
        error: (error) => {
          console.error(error);
          this._sharedService.showAlert('Error al crear usuario'+error, 'Error');
        }
      });
    }
    //Update
    else {
      this._UserAppService.update(UserApp).subscribe({
        next: (data) => {
          if(data.isSuccesful) {
            this._sharedService.showAlert('Usuario actualizado correctamente', 'Completado');
            this.modal.close(true);
          }
          else
          {
              this._sharedService.showAlert('Error al actualizar usuario', 'Error');
          }
        },
        error: (error) => {
          console.error(error);
          this._sharedService.showAlert('Error al actualizar el usuario', 'Error');
        }
      });

    }
  }


}
