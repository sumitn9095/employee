import * as Iemp from "./employee.interface";

export class Employee implements Iemp.Iemployee {
    constructor(public id: number, public name: string, public salary: number) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
}