import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase-service.service';
import { ModalController } from '@ionic/angular';
import { GalleryPage } from '../../gallery/gallery.page';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
    {
      title: 'Home',
      url: ['components', 'menu', 'dashboard'],
      icon: 'home'
    },
    {
      title: 'Profile',
      url: ['components', 'menu', 'profile'],
      icon: 'person'
    },
    {
      title: 'Gallery',
      url: ['main','gallery'],
      icon: 'photos'
    }
  ];
  activeRoute = '';
  constructor(private router: Router, private fbService: FirebaseService, private mdCtrl: ModalController) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.activeRoute = event.url;
    });
  }
  ngOnInit() {
  }
  gotoPage(url) {
    this.router.navigate(url);
  }
  urlParse(url) {
    return '/' + url.join('/');
  }
  logout() {
    this.fbService.logOut();
  }
}
