import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { ImgComponent } from './img/img.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: 'home', component: ImgComponent },
  { path: 'displayEmployees', component:TableComponent },
  { path: 'addEmployee', component: FormComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [TableComponent, FormComponent,ImgComponent,LoginComponent];
