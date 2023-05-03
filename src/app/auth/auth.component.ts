import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  isLoginMode = true;
  // authForm!: FormGroup;

  constructor(private authService: AuthService) {}

  onSwitchLoginMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(authFormAccess: NgForm) {
    console.log(authFormAccess);
    const email = authFormAccess.value.email;
    const password = authFormAccess.value.password;
    if(this.isLoginMode === true) {

    } else {
      this.authService.onAuthSignUp(email, password);
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