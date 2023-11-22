import { Department } from "../department/department";
import { Gender } from "./gender";

export interface Employee {
    id:number;
    name:string;
    dateOfBirth:Date;
    gender:Gender;
    mobileNo:number;
    email:number
    salary:string
    departmentId:number;
    department:Department;
}
