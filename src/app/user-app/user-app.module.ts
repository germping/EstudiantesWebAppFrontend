import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { UserAppService } from './services/user-app.service';
import { ListUserAppComponent } from './pages/list-user-app/list-user-app.component';
import { ModalUserAppComponent } from './modales/modal-user-app/modal-user-app.component';

@NgModule({
  declarations: [
    ListUserAppComponent,
    ModalUserAppComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule
  ],
  providers: [UserAppService],
})
export class UserAppsModule { }
