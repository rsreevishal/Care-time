import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { UserDetailsService } from 'src/app/services/user-details.service';
import { FirebaseService } from 'src/app/services/firebase-service.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.page.html',
  styleUrls: ['./teacher.page.scss'],
})
export class TeacherPage implements OnInit {
  Fields = ['higher secondary', 'U.G', 'P.G', 'Phd', 'Others'];
  constructor(private mdCtrl: ModalController, public userDetails: UserDetailsService
            , private toast: ToastController, private fbAuth: FirebaseService) { }

  ngOnInit() {
  }
  closePanel() {
    this.mdCtrl.dismiss();
  }
  toJson(obj: any) {
    return JSON.parse(JSON.stringify(obj));
  }

  finish() {
    this.fbAuth.signUp(this.userDetails.details.email, this.userDetails.details.password, this.toJson(this.userDetails.teacher)).then( () => {
      this.closePanel();
    });
  }

}
