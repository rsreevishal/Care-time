import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  constructor(private mdCtrl: ModalController) { }

  ngOnInit() {
  }
  closePanel() {
    this.mdCtrl.dismiss();
  }
}
