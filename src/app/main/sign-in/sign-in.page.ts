import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FirebaseService } from 'src/app/services/firebase-service.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  emailField: string;
  passField: string;
  constructor(private mdCtrl: ModalController, private fbService: FirebaseService) { }
  ngOnInit() {
  }
  closePanel() {
    this.mdCtrl.dismiss();
  }
  login() {
    this.fbService.signIn(this.emailField, this.passField).then(() => {
      this.closePanel();
    });
  }
}
