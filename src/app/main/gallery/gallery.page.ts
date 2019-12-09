import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FirebaseService } from '../../services/firebase-service.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {
  data: any;
  pageType: string;
  postCount = 0;
  challengeCount = 0;
  constructor(private mdCtrl: ModalController, private fbService:FirebaseService) { }

  ngOnInit() {
    this.getAllData().then( val => {
      this.data = val;
      this.data.forEach( val => {
        if(val.type === 'post') {
          this.postCount += 1;
        } else {
          this.challengeCount += 1;
        }
      });
    });
    this.pageType = 'post';
  }

  closePanel() {
    this.mdCtrl.dismiss();
  }

  async getAllData() {
    const snapshot = await this.fbService.db.collection('gallery').get();
    return snapshot.docs.map(doc => doc.data());
  }
}
