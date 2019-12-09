import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserDetailsService } from 'src/app/services/user-details.service';
import { ChildrenPage } from './children/children.page';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.page.html',
  styleUrls: ['./parent.page.scss'],
})
export class ParentPage implements OnInit {
  constructor(private mdCtrl: ModalController, public userDetails: UserDetailsService) {}

  ngOnInit() {
  }
  closePanel() {
    this.mdCtrl.dismiss();
  }
  async childPanel() {
    this.filterDate();
    this.closePanel();
    const model = await this.mdCtrl.create({
      component: ChildrenPage
    });
    await model.present();
  }
  filterDate() {
    let time = this.userDetails.parent.workStart.split('T')[1];
    this.userDetails.parent.workStart = time;
    time = this.userDetails.parent.workEnd.split('T')[1];
    this.userDetails.parent.workEnd = time;
  }
}
