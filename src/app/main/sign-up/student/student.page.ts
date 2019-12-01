import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { UserDetailsService } from 'src/app/services/user-details.service';
import { FirebaseService } from 'src/app/services/firebase-service.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.page.html',
  styleUrls: ['./student.page.scss'],
})
export class StudentPage implements OnInit {
  Fields = ['primary education', 'secondary education', 'higher secondary', 'U.G', 'P.G', 'other'];
  constructor(private mdCtrl: ModalController, public userDetails: UserDetailsService
            , private toast: ToastController, private fbAuth: FirebaseService) { }

  ngOnInit() {
  }
  closePanel() {
    this.mdCtrl.dismiss();
  }
  finish() {
    const details = this.userDetails.details;
    this.fbAuth.signUp(details.email, details.password, this.toJson(this.userDetails.student)).then( () => {
      this.closePanel();
    });
  }

  toJson(obj: any) {
    return JSON.parse(JSON.stringify(obj));
  }
}
