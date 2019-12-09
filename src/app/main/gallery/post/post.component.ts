import { Component, OnInit, Input} from '@angular/core';
import { FirebaseService } from '../../../services/firebase-service.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  @Input() thumbnailUrl: string = null;
  @Input() message: string = null;
  @Input() title: string = null;
  @Input() subtitle: string = null;
  @Input() link: string = null;
  @Input() type: string = null;
  colors = ['primary', 'secondary', 'tertiary'];
  color: string;
  account = '';
  constructor(private fbService: FirebaseService, private storage: Storage, private router: Router, private toast: ToastController) { }
  ngOnInit() {
    this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
    this.storage.get(this.fbService.USER_ID).then(val => {
      this.account = JSON.parse(val).person.account;
    });
  }
  gotoDashboard() {
    if(this.fbService.authenticationState.value && this.account === 'student') {
      this.router.navigate(['components','menu','dashboard']);
    } else {
      this.toast.create({
        header:'Sorry!',
        message:'You should login as student to play',
        color:'danger',
        position:'middle',
        duration:4000
      }).then(t=>{
        t.present();
      });
    }
  }
}
