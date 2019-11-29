import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpPageRoutingModule } from './sign-up-routing.module';

import { SignUpPage } from './sign-up.page';
import { ParentPageModule } from './parent/parent.module';
import { StudentPageModule } from './student/student.module';
import { TeacherPageModule } from './teacher/teacher.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignUpPageRoutingModule,
    ParentPageModule,
    StudentPageModule,
    TeacherPageModule
  ],
  declarations: [SignUpPage]
})
export class SignUpPageModule {}
