import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { response } from 'express';
import { error } from 'console';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  credentials = {
    username : '',
    password: ''
  }

  constructor(private loginService : LoginService) {}

  ngOnInit(): void {
      
  }

  onSubmit(){
    console.log("Form Submitted");
    if((this.credentials.username != '' && this.credentials.password != '') && (this.credentials.username != null && this.credentials.password != null)){
      console.log("Submit Form");
      
      this.loginService.generateToken(this.credentials).subscribe(
        (response: any) => {
          console.log(response.token);
          this.loginService.login(response.token)
          window.location.href="/dashboard"
        },
        error => {
          console.log(error);
        }
      );
    }else{
      console.log("Fields Are Required");
    }
  }
}
