import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  public emps:any[] = [];

  constructor(public empService: EmployeeService) { }

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees() {
    // this.empService.empBS.subscribe( e => {
    //   this.emps = e;
    //   console.log(e);
    // })


    this.empService.getEmployees().subscribe( e => {
      this.emps = e;
      //console.log(e);
    })
  }

}
