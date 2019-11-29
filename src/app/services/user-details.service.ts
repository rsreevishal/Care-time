import { Injectable } from '@angular/core';
import { Person } from '../main/Person.model';
import { Student} from '../main/Student.model';
import { Teacher } from '../main/Teacher.model';
import { Parent } from '../main/Parent.model';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
  details: Person = {
    name: null,
    email: null,
    mobile: null,
    age: null,
    city: null,
    account: null,
    password: null
  };
  student: Student = {
    person: this.details,
    gender: null,
    education: null,
    studied: null
  };
  teacher: Teacher = {
    person: this.details,
    gender: null,
    education: null,
    studied: null
  };
  parent: Parent = {
    person: this.details,
    role: null,
    children: null,
    workStart: null,
    workEnd: null,
    childrenDetails: [null, null, null, null, null]
  };
  constructor() {
  }
}
