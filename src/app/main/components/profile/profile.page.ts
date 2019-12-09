import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { FirebaseService } from 'src/app/services/firebase-service.service';
import { Person } from '../../Person.model';
import { Student } from '../../Student.model';
import { Teacher } from '../../Teacher.model';
import { Parent } from '../../Parent.model';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  userData: any;
  profile: Person = {
    name: null,
    email: null,
    mobile: null,
    age: null,
    account: null,
    city: null,
    password: null
  };
  student: Student = {
    gender: null,
    education: null,
    studied: null,
    person: null
  };
  teacher: Teacher = {
    gender: null,
    education: null,
    studied: null,
    person: null
  };
  parent: Parent = {
    person: null,
    role: null,
    children: null,
    workStart: null,
    workEnd: null,
    childrenDetails: null
  };
  constructor(private storage: Storage, private fbService: FirebaseService, private toast: ToastController) {
  }
  ngOnInit() {
    this.storage.get(this.fbService.USER_ID).then(val => {
      if(val) {
        this.loadData(val);
      } else {
        this.toast.create({
          header:'Sorry!',
          message:'Something went wrong please login again',
          color:'danger',
          position:'middle',
          duration:4000
        }).then(t=>{
          t.present()
        });
      }
    });
  }

  loadData(val) {
    let doc = JSON.parse(val);
    this.profile.name = doc.person.name;
    this.profile.email = doc.person.email;
    this.profile.mobile = doc.person.mobile;
    this.profile.city = doc.person.city;
    this.profile.age = doc.person.age;
    this.profile.account = doc.person.account;
    switch (doc.person.account) {
      case 'teacher': {
        this.teacher.gender = doc.gender;
        this.teacher.education = doc.education;
        this.teacher.studied = doc.studied;
        this.teacher.person = doc.person;
        break;
      }
      case 'student': {
        this.student.gender = doc.gender;
        this.student.education = doc.education;
        this.student.studied = doc.studied;
        this.student.person = doc.person;
        break;
      }
      case 'parent': {
        this.parent.role = doc.role;
        this.parent.children = doc.children;
        this.parent.workStart = doc.workStart;
        this.parent.workEnd = doc.workEnd;
        this.parent.person = doc.person;
        this.parent.childrenDetails = doc.childrenDetails;
      }
    }
  }
}
