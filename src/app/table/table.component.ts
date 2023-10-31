import { Component } from '@angular/core';
import {EmployeeService } from '../services/employee.service';
import { FormComponent } from '../form/form.component';
import { Employee } from '../Models/employee.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  employeeData: Employee[] = [];
  reactiveForm !: FormGroup;
  
  constructor(private employeeService:EmployeeService) {

  }

  ngOnInit() {

    this.getEmployees();

  }

  getEmployees() {
    //debugger;
   this.employeeService.getAllEmployees().subscribe(
     {
       
       next: employeeData => {
         console.log(employeeData);
         this.employeeData = employeeData;
       },
       error: error => { alert(error); console.log(error); }
     }
   );
  }
    
 

  

/*  onupdate(row:any) {
    this.reactiveForm.controls['firstname'].setValue(row.firstname);
  }
  */


  deleteEmployees(id: number) {
    this.employeeService.deleteEmployee(id).subscribe(
      res => {
      alert("Deleting record !!")
      this.getEmployees();
    })
    
  }

}
