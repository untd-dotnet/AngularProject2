import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { EmpInterceptor } from './services/emp.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CardModule,
    TableModule,
    ButtonModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:EmpInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
