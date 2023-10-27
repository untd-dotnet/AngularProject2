import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee} from '../Models/employee.model';
import { EmployeeService } from '../services/employee.service';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})


export class FormComponent {
 
  reactiveForm !: FormGroup;
  constructor(private formbuilder: FormBuilder, public  employeeService: EmployeeService) { }


  employee = new Employee();
  employeeData !: any;
  
  
  ngOnInit() {
    this.reactiveForm =this.formbuilder.group({
      firstname: ['', [Validators.required]],
      lastname: [''],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern('[0-9]*')]], 
      jobtitle: ['', [Validators.required]]
    });
   /* this.getAllEmployees();*/
  }

  onSubmit() {
    if (this.reactiveForm.valid) {
      this.addEmployee();
    } 
  }
  addEmployee() {
    this.employee.firstname = this.reactiveForm.value.firstname;
    this.employee.lastname = this.reactiveForm.value.lastname;
    this.employee.email = this.reactiveForm.value.email;
    this.employee.mobile = this.reactiveForm.value.mobile;
    this.employee.jobtitle = this.reactiveForm.value.jobtitle;

    this.employeeService.addEmployee(this.employee).subscribe(
      {
        next: res => { console.log(res); this.reactiveForm.reset(); alert('Employee inserted succesfully :)') /*this.getAllEmployees(); */ },
        error: error => {
          console.log(error); alert("oops..!!");
        }
      }
    );

  }




}

