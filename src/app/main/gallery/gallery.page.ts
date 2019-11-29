import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {

  constructor(private mdCtrl: ModalController) { }

  ngOnInit() {
  }

  closePanel() {
    this.mdCtrl.dismiss();
  }
}
