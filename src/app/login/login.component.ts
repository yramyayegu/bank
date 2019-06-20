import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestService } from '../rest.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  lstcomments: Comment[];
  loginForm: FormGroup;
  submitted = false;
  loginresult :string;
  email : string;
  bank :string;
  
  constructor( private router: Router, private restService : RestService, private formBuilder: FormBuilder,) { }

  ngOnInit() {

    if (localStorage.getItem("bank_id") != null) {
      this.router.navigate(['/dashboard']);
    }    
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      pwd: ['', Validators.required]
  });
  }

  onSubmit() 
  {   
    console.log('logging in');
    
    this.submitted = true;
    if (this.loginForm.invalid) 
    {
      alert(" invalid details ");
        return;
    }
    let logindetails = JSON.stringify(this.loginForm.value);    
    this.email=this.loginForm.value.email;    
    this.restService.login(logindetails).subscribe
    (
      data => {
       
          console.log(data.customer_id);         
          localStorage.setItem('userid', data.customer_id);
          localStorage.setItem('bank_id', data.bank_id);
          localStorage.setItem('username', this.email);
          this.router.navigate(['/dashboard']);
      },
      error => {
        this.loginresult= 'invalid details';   
    });    
  }

}
