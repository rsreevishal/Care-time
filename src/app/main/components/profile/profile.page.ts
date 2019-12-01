import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { FirebaseService } from 'src/app/services/firebase-service.service';
import { Person } from '../../Person.model';
import { Student } from '../../Student.model';
import { Teacher } from '../../Teacher.model';
import { Parent } from '../../Parent.model';

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
  constructor(private storage: Storage, private fbService: FirebaseService) {
  }
  ngOnInit() {
    this.storage.get(this.fbService.TOKEN_KEY).then( val => {
      if (val) {
        this.userData = JSON.parse(val);
        this.fbService.db.collection('users').doc(this.userData.uid).get().then( doc => {
          if (doc.exists) {
            this.profile.name = doc.data().person.name;
            this.profile.email = doc.data().person.email;
            this.profile.mobile = doc.data().person.mobile;
            this.profile.city = doc.data().person.city;
            this.profile.age = doc.data().person.age;
            this.profile.account = doc.data().person.account;
            switch (doc.data().person.account) {
              case 'teacher': {
                this.teacher.gender = doc.data().gender;
                this.teacher.education = doc.data().education;
                this.teacher.studied = doc.data().studied;
                this.teacher.person = doc.data().person;
                break;
              }
              case 'student': {
                this.student.gender = doc.data().gender;
                this.student.education = doc.data().education;
                this.student.studied = doc.data().studied;
                this.student.person = doc.data().person;
                break;
              }
            }
          }
        });
      }
    });
  }

}
