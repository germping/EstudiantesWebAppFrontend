import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { SharedService } from '../../shared/shared.service';
import { Login } from '../interfaces/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  formLogin: FormGroup;
  hidePassword: boolean = true;
  showLoading: boolean = false;
  
  constructor(private fb : FormBuilder, 
    private userService: UserService,
    private sharedService: SharedService,
    private router: Router
  ) {
    this.formLogin = this.fb.group({ 
      username: ['', Validators.required],
      password: ['', Validators.required] 
    });
  
  }
  startSesion(){
    this.showLoading = true;
    const request: Login = {
      username: this.formLogin.value.username, 
      password: this.formLogin.value.password  
    };
    this.userService.startSesion(request).subscribe({
      next: (response) => {
        this.sharedService.savelogin(response);
        this.router.navigate(['layout']);
      },
      complete: () => {
        this.showLoading = false; 
      },
      error: (error) => {
        this.sharedService.showAlert(error.error, 'error');
        this.showLoading = false;
      }
    });
  }
}
