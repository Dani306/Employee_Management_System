import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Department } from './department';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  
  baseApi=`${environment.baseApiUrl}Departments`;

  constructor(private client:HttpClient) { }
  getList():Observable <Department[]>{
    return this.client.get<Department[]>(this.baseApi);
  }
  add(dept:Department):Observable<Department>{
    return this.client.post<Department>(this.baseApi,dept);

  }
  delete(id:number):Observable<void>{
    return this.client.delete<void>(this.baseApi +'/'+id);
 
  }
  update(d:Department):Observable<void>{
    return this.client.put<void>(this.baseApi +'/'+d.id,d);
  }

  getById(id:number):Observable<Department>{
    return this.client.get<Department>(this.baseApi +'/'+id);
  }
  getDepartment(): Observable<Department[]> {
    return this.client.get<Department[]>(this.baseApi);
  }
  createDepartment(d1: Department): Observable<Department> {
    return this.client.post<Department>(this.baseApi, d1);
  }

}
