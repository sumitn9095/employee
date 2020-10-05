import { Component, ChangeDetectorRef, OnInit, AfterContentChecked } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent implements OnInit, AfterContentChecked {
  public employeeFormGroup: FormGroup;
  public emp : Employee;
  public employeeId: number;

  constructor(private fb : FormBuilder, private empService: EmployeeService, private cdref : ChangeDetectorRef ) { }

  ngOnInit(): void {
    //console.log(this.employeeId);
    this.employeeFormGroup = this.fb.group({
      "name" : ['', [Validators.required]],
      "salary" : ['', [Validators.required]]
    })
  }

  ngAfterContentChecked() {
    this.cdref.detectChanges();
    this.empService.empId.subscribe(e => {
      this.employeeId = e;
    });
    //console.log(this.employeeId);
  }

  addEmployee(employeeFormGroup : any){
    if (!employeeFormGroup.valid) {
      
      return;
    } else {
      
      this.emp = {
        'id': this.employeeId,
        'name': employeeFormGroup.value.name,
        'salary': employeeFormGroup.value.salary
      }
      this.empService.addEmployees(this.emp);
    }
  }
}
