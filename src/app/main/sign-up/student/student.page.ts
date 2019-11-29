import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { UserDetailsService } from 'src/app/services/user-details.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.page.html',
  styleUrls: ['./student.page.scss'],
})
export class StudentPage implements OnInit {
  Fields = ['primary education', 'secondary education', 'higher secondary', 'U.G', 'P.G', 'other'];
  constructor(private mdCtrl: ModalController, public userDetails: UserDetailsService, private toast: ToastController) { }

  ngOnInit() {
  }
  closePanel() {
    this.mdCtrl.dismiss();
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
}
