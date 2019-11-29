import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SignInPage } from './sign-in/sign-in.page';
import { SignUpPage } from './sign-up/sign-up.page';
import { GalleryPage } from './gallery/gallery.page';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor(public mdCtrl: ModalController) { }

  ngOnInit() {
  }

  async loginPanel() {
    const model = await this.mdCtrl.create({
      component: SignInPage
    });
    await model.present();
  }

  async signUpPanel() {
    const model = await this.mdCtrl.create({
      component: SignUpPage
    });
    await model.present();
  }

  async gallery() {
    const model = await this.mdCtrl.create({
      component: GalleryPage
    });
    await model.present();
  }
}
