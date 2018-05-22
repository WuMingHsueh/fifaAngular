import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PasswordCompareValidator } from './password-compare';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private formBuild: FormBuilder) { }

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
}
