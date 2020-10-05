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
  public empArr: Observable<Employee[]>;

  public wwwq:any = [];

  //public db = "https://employee-c1ff1.firebaseio.com/employees";

  public db = "https://my-json-server.typicode.com/sumitn9095/demo/employees";
  
  constructor(public http: HttpClient /*, public firestore: AngularFirestore*/ ) {
    //this.empArr = this.empBS.asObservable();
  }

  getEmployees() {
  
    this.http.get(this.db).pipe(
      map((e:Employee[]) => {
        //console.log();
        return e;
      })
    ).subscribe((e:Employee[]) => {
      this.emp = e;
      this.empBS.next(this.emp);
    })
    
    return this.empBS.asObservable();

    //return this.firestore.collection('policies').snapshotChanges();
  }

}