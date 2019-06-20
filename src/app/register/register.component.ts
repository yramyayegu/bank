import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  lstcomments: Comment[];
  registerForm: FormGroup;
  submitted = false;
  Insertresult :string;
  
  constructor(
       private restService : RestService,
       private formBuilder: FormBuilder,
       private  httpclient : HttpClient ,
       
    ) { }
  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      uname: ['', Validators.required],
      phno: ['', Validators.required],
      bank: ['', Validators.required],      
      add: ['', Validators.required], 
      pwd: ['', Validators.required]
  });
    this.restService.getcomments().subscribe
    (
         data =>
         {
           this.lstcomments = data;
           console.log(data);         
         }
    );
  }
  onSubmit() 
  {   
    this.submitted = true;
    if (this.registerForm.invalid) 
    {
      alert(" invalid details ");
        return;
    }
    let food = JSON.stringify(this.registerForm.value);
    this.restService.postcustomer(food).subscribe
    (
      data => {
        this.Insertresult = data;
       console.log(data); 
      }
   );

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  }
  

   
}
 