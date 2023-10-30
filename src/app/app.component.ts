import { Component } from '@angular/core';
import { EmployeeService } from './services/employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularProject2';
  constructor(public empService: EmployeeService, private route:Router ) { }

  onLogout() {
    localStorage.removeItem('token');
    this.route.navigateByUrl('/home');
  }
}
