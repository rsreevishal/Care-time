import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { UserDetailsService } from 'src/app/services/user-details.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.page.html',
  styleUrls: ['./teacher.page.scss'],
})
export class TeacherPage implements OnInit {
  Fields = ['higher secondary', 'U.G', 'P.G', 'Phd', 'Others'];
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
