import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  basic: string | string[];
  constructor(private  httpclient : HttpClient) { }
    getcomments(): Observable<any>{
      return this.httpclient.get("http://lemonflipsolutions.com/bank/index.php/bank/allbanks")
    }
    postcustomer(data): Observable<any>{
      return this.httpclient.post("http://localhost/bank/index.php/customer/insert",data)
    }
    login(data):Observable<any>{
      return this.httpclient.post("http://localhost/bank/index.php/customer/login",data)
    }
    getalldetails(data):Observable<any>{
      return this.httpclient.post("http://localhost/bank/index.php/customer/alldetails",data)
    }

    gettransactions(data):Observable<any>{
      return this.httpclient.post("http://localhost/bank/index.php/bank/transactions",data)
    }

}
