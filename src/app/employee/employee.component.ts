import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './shared/employee.service';
import { Employee } from './shared/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  public emps:Employee[] = [];
  constructor(private empService : EmployeeService) { }
  ngOnInit(): void {
    this.loadEmployees();
  }
  loadEmployees() {
    this.empService.getEmployees().subscribe( e => {
      this.emps = e;
      //console.log(e);
    })
  }

}
