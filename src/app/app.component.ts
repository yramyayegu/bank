import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bank';
  constructor( private router: Router) { }
  logout()
  {
    console.log("logout me");  
    localStorage.clear();
    this.router.navigate(['/login']);
  }
  register()
  {
    this.router.navigate(['/register']);
  }
}
