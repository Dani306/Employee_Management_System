import { Component } from '@angular/core';
import { DepartmentService } from '../department.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent {
  form!:FormGroup;
  constructor(private depService:DepartmentService,
    private router:Router){}
    ngOnInit(): void{
      this.form = new FormGroup({
        id: new FormControl(0),
        name: new FormControl('',Validators.required)
      })

    }
    submit(){
      console.log(this.form.value);
      this.depService.add(this.form.value).subscribe(result=>{
        alert('added successfully');
        this.router.navigate(['/departments']);
      },err=>{
        alert('there is an error');
        console.log(err);

      
      })
    }

}
