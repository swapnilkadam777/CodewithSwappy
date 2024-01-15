import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
}) 
export class LoginComponent   {
  loginForm: FormGroup = new FormGroup({}); 
  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email:['',[Validators.required,Validators.minLength(12),Validators.maxLength(50),Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      password:['',[Validators.required,Validators.minLength(6),Validators.maxLength(16)]]
    });
   } 
  login = function(){
      console.log("Done");
  }
}
