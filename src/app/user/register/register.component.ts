import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { PasswordCompareValidator } from './password-compare';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  errorMessage: string = '';

  constructor(private formBuild: FormBuilder,
              private router: Router,
              private userService: UserService) { }

  ngOnInit() {
    this.registerForm = this.formBuild.group({
      account: ['', Validators.required],
      password: ['', Validators.required],
      repassword: ['', [Validators.required, PasswordCompareValidator('password')]],
      username: ['', Validators.required]
    });
  }

  get account() { return this.registerForm.get('account'); }
  get password() { return this.registerForm.get('password'); }
  get repassword() { return this.registerForm.get('repassword'); }
  get username() { return this.registerForm.get('username'); }

  sendRegister() {
    this.userService.register(this.registerForm.get('account').value,
                              this.registerForm.get('password').value,
                              this.registerForm.get('repassword').value,
                              this.registerForm.get('username').value)
    .subscribe(
      () => {
        alert("註冊成功 請登入");
        this.router.navigateByUrl('login');
      }
      ,
      errors => {
        this.errorMessage = errors['msg'];
        this.registerForm.reset();
      }
    );
  }
}
