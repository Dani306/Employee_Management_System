import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListemployeeComponent } from './Employee/listemployee/listemployee.component';
import { AddemployeeComponent } from './Employee/addemployee/addemployee.component';
import { DatePipe } from '@angular/common';
import { UpdateemployeeComponent } from './Employee/updateemployee/updateemployee.component';
import { ListDepartmentComponent } from './department/list-department/list-department.component';
import { AddDepartmentComponent } from './department/add-department/add-department.component';
import { UpdatedepartmentComponent } from './department/updatedepartment/updatedepartment.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { TokenInterceptor } from './auth/token.interceptor.service';
 

@NgModule({
  declarations: [
    AppComponent,
    ListDepartmentComponent,
    AddDepartmentComponent,
    UpdatedepartmentComponent,
    ListemployeeComponent,
    AddemployeeComponent,
    UpdateemployeeComponent,
    LoginComponent,
    RegisterComponent,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe,{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }