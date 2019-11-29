import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { ParentPage } from './parent/parent.page';
import { StudentPage } from './student/student.page';
import { TeacherPage } from './teacher/teacher.page';
import { UserDetailsService } from 'src/app/services/user-details.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  confirmPassword = '';
  constructor(private mdCtrl: ModalController, public userService: UserDetailsService, private toastCtrl: ToastController) {
   }
  ngOnInit() {
  }
  closePanel() {
    this.mdCtrl.dismiss();
  }
  async parentPanel() {
    const model = await this.mdCtrl.create({
      component: ParentPage
    });
    await model.present();
  }
  async studentPanel() {
    const model = await this.mdCtrl.create({
      component: StudentPage
    });
    await model.present();
  }
  async teacherPanel() {
    const model = await this.mdCtrl.create({
      component: TeacherPage
    });
    await model.present();
  }

  async nextPanel() {
    if (this.confirmPassword === this.userService.details.password) {
      this.closePanel();
      switch (this.userService.details.account) {
        case 'parent' : {
          this.closePanel();
          this.parentPanel();
          break;
        }
        case 'student' : {
          this.closePanel();
          this.studentPanel();
          break;
        }
        case 'teacher' : {
          this.closePanel();
          this.teacherPanel();
          break;
        }
      }
    } else {
      const message = 'Confirm password is not matching.';
      const toast = await this.toastCtrl.create( {
        header: 'Please check',
        message,
        position: 'middle',
        duration: 2000
      });
      toast.present();
    }
  }
}
