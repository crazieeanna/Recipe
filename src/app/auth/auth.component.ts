import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  isLoginMode = true;
  errorSignUpLogin: string = '';
  // authForm!: FormGroup;

  constructor(private authService: AuthService, private router: Router) {}

  onSwitchLoginMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(authFormAccess: NgForm) {
    console.log(authFormAccess);
    const email = authFormAccess.value.email;
    const password = authFormAccess.value.password;
    
    if(this.isLoginMode === true) {
      this.authService.onAuthLogin(email, password).subscribe(
        loginResponse => {
          console.log(loginResponse);
          this.router.navigate(['/recipes']); 
        }, loginErrorResponse => {
          console.log(loginErrorResponse);
          switch(loginErrorResponse.error.error.message) {
            case 'EMAIL_NOT_FOUND': 
              this.errorSignUpLogin = 'This E-mail is Not Found!';
            break;
            case 'INVALID_PASSWORD': 
             this.errorSignUpLogin = 'This Password is in-correct!';
            break;  
          }                  
        }
      );

    } else {
      this.authService.onAuthSignUp(email, password).subscribe(
        signUpResponse => {
          console.log(signUpResponse);
          this.router.navigate(['/recipes']);
        }, signUpErrorResponse => {
          console.log(signUpErrorResponse);
          switch(signUpErrorResponse.error.error.message) {
            case 'EMAIL_EXISTS': this.errorSignUpLogin = 'This E-mail Already Exists!';
          }  
        }
      );
      authFormAccess.reset();
    }
    

  }

  // onAuthForm() {
  //   this.authForm = new FormGroup({
  //     email: new FormControl(),
  //     password: new FormControl(Validators.required)
  //   });
  // }


}