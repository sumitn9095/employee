import { Injectable } from '@angular/core';
//import { AngularFirestore } from '@angular/fire/firestore';
import { Employee } from './employee.model';
import { HttpClient } from '@angular/common/http';
import { map, filter, find } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  public emp:Employee[] = [];

  public empBS = new BehaviorSubject<Employee[]>([]);
  public mppId: number = 14;
  public empId = new BehaviorSubject(this.mppId);
  public empArr: Observable<Employee[]>;

  public wwwq:any = [];

  //public db = "https://employee-c1ff1.firebaseio.com/employees";

  public db = "https://my-json-server.typicode.com/sumitn9095/demo/employees";
  
  constructor(public http: HttpClient /*, public firestore: AngularFirestore*/ ) {
    //this.empArr = this.empBS.asObservable();
  }

  getEmployees() {
    this.http.get(this.db).pipe(
      map((e:any[]) => {
        return e.filter(x => x.salary > 30);
      })
    )      
    .subscribe(
      (f:any) => {
        this.emp = f;
        this.empBS.next(this.emp);
      },
      error => {
        console.log(new Error('There was some error'));
      },
      () => {
        console.log('completed');
      }
    )
    
    return this.empBS.asObservable();
    //return this.firestore.collection('policies').snapshotChanges();
  }


  showEmployees() {
    this.empBS.next(this.emp);
    return this.empBS.asObservable();
  }

  addEmployees(newEmployeeObj: Employee) {
    //console.log(newEmployeeObj);
    this.emp.push(newEmployeeObj);
    //console.log("qqqqq");
    console.log(this.emp);
    this.mppId = +this.mppId + 1;
    this.empId.next(this.mppId);
    this.empBS.next(this.emp);
    return this.empBS.asObservable();
  }

}