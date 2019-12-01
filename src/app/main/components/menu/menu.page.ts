import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
    {
      title: 'Home',
      url: ['main', 'components', 'menu', 'dashboard'],
      icon: 'home'
    },
    {
      title: 'Profile',
      url: ['main', 'components', 'menu', 'profile'],
      icon: 'person'
    }
  ];
  activeRoute = '';
  constructor(private router: Router, private fbService: FirebaseService) {
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
