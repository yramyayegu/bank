import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { HttpClient ,HttpParams} from '@angular/common/http';
import {DataTableModule} from "angular-6-datatable";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  
  bank_id = localStorage.getItem('bank_id');
  customer_id = localStorage.getItem('userid');
  bankdetails: any;
  account_id:number;
  Transaction : Comment[];
  
  constructor(  private restService : RestService) { }

  ngOnInit() { 
      
    let id = JSON.stringify({ 'bank_id': this.bank_id , 'customer_id': this.customer_id });  
    this.restService.getalldetails(id).subscribe(
       data => 
       { 
         this.bankdetails = data;
         this.account_id=data.account_id;
             let tid = JSON.stringify({ 'account_id': this.account_id });  
             this.restService.gettransactions(tid).subscribe( data => {
              console.log(data); 
              this.Transaction = data;
             },error => {console.log('invalid transactions'); });
        },
        error => {console.log('invalid details'); });
  }
}