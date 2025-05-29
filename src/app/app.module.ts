import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserModule } from './user/user.module';
import { MaterialModule } from './material/material.module';
//import { ListUserAppComponent } from './user-app/pages/list-user-app/list-user-app.component';
//import { ModalUserAppComponent } from './user-app/modales/modal-user-app/modal-user-app.component';
//import { ModalTeacherComponent } from './teachers/modales/modal-teacher/modal-teacher.component';
//import { ListTeacherComponent } from './teachers/pages/list-teacher/list-teacher.component';


@NgModule({
  declarations: [
    AppComponent,
    //ListUserAppComponent,
    //ModalUserAppComponent,
    //ModalTeacherComponent,
    //ListTeacherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    UserModule,
    MaterialModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
