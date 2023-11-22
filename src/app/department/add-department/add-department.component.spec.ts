import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AddDepartmentComponent } from './add-department.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DepartmentService } from '../department.service';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

describe('AddDepartmentComponent', () => {
  let component: AddDepartmentComponent;
  let fixture: ComponentFixture<AddDepartmentComponent>;
  let departmentService: DepartmentService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddDepartmentComponent],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [DepartmentService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDepartmentComponent);
    component = fixture.componentInstance;
    departmentService = TestBed.inject(DepartmentService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with default values', () => {
    expect(component.form).toBeDefined();
    expect(component.form instanceof FormGroup).toBeTruthy();
    expect(component.form.get('id')?.value).toEqual(0);
    expect(component.form.get('name')?.value).toEqual('');
    expect(component.form.get('name')?.hasError('required')).toBeTruthy();
  });

  it('should call DepartmentService add method and redirect on successful submission', () => {
    spyOn(window, 'alert');
    spyOn(router, 'navigate');

    const mockDepartment = { id: 1, name: 'Test Department' };
    const addSpy = spyOn(departmentService, 'add').and.returnValue(of(mockDepartment));

    component.form.patchValue({
      id: mockDepartment.id,
      name: mockDepartment.name
    });

    component.submit();

    fixture.whenStable().then(() => {
      expect(addSpy).toHaveBeenCalledWith(jasmine.objectContaining(mockDepartment));
      expect(window.alert).toHaveBeenCalledWith('Added Succesfully'); // Corrected typo
      expect(router.navigate).toHaveBeenCalledWith(['/departments']);
    });
  });

  it('should handle error on submission', () => {
    spyOn(window, 'alert');

    const errorResponse = { status: 500, message: 'Internal Server Error' };
    spyOn(departmentService, 'add').and.returnValue(throwError(errorResponse));

    component.submit();

    fixture.whenStable().then(() => {
      expect(window.alert).toHaveBeenCalledWith('Error');
    });
  });
});

