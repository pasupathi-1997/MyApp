import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  loginForm:FormGroup|any;
  formSubmitted:boolean = false;
  constructor(private formbuilder:FormBuilder, private auth:AuthService){}
  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email:new FormControl(''),
      password:new FormControl('')
    })
  }
  onSubmit(){
    console.log(this.loginForm.value);
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;
    this.auth.Login(email, password);
  }

}
