import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from 'src/app/services/user-details.service';
import { Child } from 'src/app/main/Child.model';
import { ToastController, NavController, ModalController } from '@ionic/angular';

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
  constructor(public userDetails: UserDetailsService, private toast: ToastController, private modCtrl: ModalController) {
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
  async finish() {
    const message = await this.toast.create({
      header: 'Thank you',
      message: 'Your request is successfully submitted!',
      position: 'middle',
      duration: 6000
    });
    await message.present();
    this.closePanel();
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
