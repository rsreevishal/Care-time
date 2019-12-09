import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from 'src/app/services/user-details.service';
import { Child } from 'src/app/main/Child.model';
import { ToastController, NavController, ModalController } from '@ionic/angular';
import { FirebaseService } from 'src/app/services/firebase-service.service';

@Component({
  selector: 'app-children',
  templateUrl: './children.page.html',
  styleUrls: ['./children.page.scss'],
})
export class ChildrenPage implements OnInit {
  Fields = ['primary education', 'secondary education', 'higher secondary', 'U.G', 'P.G', 'other'];
  heading: string;
  index: number;
  btnMessage: string;
  details: Child = {
    name: null,
    age: null,
    gender: null,
    education: null,
    studied: null,
    interest: null
  };
  constructor(public userDetails: UserDetailsService, private toast: ToastController,
              private modCtrl: ModalController, private fbAuth: FirebaseService) {
    this.index = 0;
    this.heading = 'Child ' + (this.index + 1) + ' details';
  }

  ngOnInit() {
    if (this.userDetails.parent.children === 1) {
      this.btnMessage = 'Sign up';
    } else {
      this.btnMessage = 'Next child details';
    }
  }
  finish() {
    this.fbAuth.signUp(this.userDetails.details.email, this.userDetails.details.password, this.toJson(this.userDetails.parent)).then( () => {
      this.closePanel();
    });
  }

  toJson(obj: any) {
    return JSON.parse(JSON.stringify(obj));
  }

  closePanel() {
    this.modCtrl.dismiss();
  }
  next(form: any) {
    this.userDetails.parent.childrenDetails[this.index] = JSON.parse(JSON.stringify(this.details));
    this.index += 1;
    this.heading = 'Child ' + (this.index + 1) + ' details';
    if (this.index + 1 === this.userDetails.parent.children) {
      this.btnMessage = 'Sign up';
    } else if (this.index === this.userDetails.parent.children) {
      this.finish();
    }
    form.reset();
  }
}
