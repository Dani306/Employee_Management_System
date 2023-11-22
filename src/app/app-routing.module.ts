import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddDepartmentComponent } from './department/add-department/add-department.component';
import { UpdatedepartmentComponent } from './department/updatedepartment/updatedepartment.component';
import { ListDepartmentComponent } from './department/list-department/list-department.component';
import { ListemployeeComponent } from './Employee/listemployee/listemployee.component';
import { AddemployeeComponent } from './Employee/addemployee/addemployee.component';
import { UpdateemployeeComponent } from './Employee/updateemployee/updateemployee.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { routeAuthGuard } from './auth/route-auth.guard';

const routes: Routes = [
  {path:'departments',component:ListDepartmentComponent,canActivate:[routeAuthGuard]},
  {path:'departments/add',component:AddDepartmentComponent,canActivate:[routeAuthGuard]},
  {path:'departments/edit/:id',component:UpdatedepartmentComponent,canActivate:[routeAuthGuard]},
  {path:'employees',component:ListemployeeComponent,canActivate:[routeAuthGuard]},
  {path:'employees/add',component:AddemployeeComponent,canActivate:[routeAuthGuard]},
  {path:'employees/edit/:id',component:UpdateemployeeComponent,canActivate:[routeAuthGuard]},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
