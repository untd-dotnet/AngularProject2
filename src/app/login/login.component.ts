import { Component } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm !: FormGroup;
  constructor(private formbuilder: FormBuilder, public empService: EmployeeService,private route : Router) { }


  ngOnInit() {
    this.loginForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }


  loginmethod() {

    if (this.loginForm.valid) {

      this.empService.login(this.loginForm.value).subscribe(res =>
      {
        if (res) {
          console.log(res);
          alert('Employee logged in  succesfully :');
          localStorage.setItem('token', res);
          this.route.navigateByUrl('/displayEmployees');
        }
        else {
          console.log(res);
          alert(res.message);
        }

      })
    }
    
  }

}
