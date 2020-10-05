import { Component, Input, OnInit } from '@angular/core';

import { EmployeeService } from '../shared/employee.service';

import { Employee } from '../shared/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  public employeeListing: Employee[] = [];



  constructor(public empService: EmployeeService) { }

  showEmployees(){
    this.empService.showEmployees().subscribe(e => {
      this.employeeListing = e;
    })
  }

  ngOnInit(): void {
    ////console.log(this.emps);
    //this.employeeListing = this.emps;
    this.showEmployees();
  }

}
