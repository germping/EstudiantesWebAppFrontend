import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Sesion } from '../user/interfaces/sesion';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private _snackBar: MatSnackBar) { }
  
  showAlert(message: string, typeMesage: string) {
    this._snackBar.open(message, typeMesage, {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000,
    });
  }

  savelogin(sesion: Sesion){
    if (typeof localStorage !== 'undefined') {
      const data = localStorage.getItem('userSesion');
    }
    localStorage.setItem('userSesion', JSON.stringify(sesion));
  }
  getSesion(){
    if (typeof localStorage !== 'undefined') {
      const data = localStorage.getItem('userSesion');
    }
    const sesionString = localStorage.getItem('userSesion');
    const sesionToken = JSON.parse(sesionString!);
    
    return sesionToken;
  }
  deleteSesion(){
    localStorage.removeItem('userSesion');
  }
}
