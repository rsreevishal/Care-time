import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainPageRoutingModule } from './main-routing.module';

import { MainPage } from './main.page';
import { SignInPageModule } from './sign-in/sign-in.module';
import { SignUpPageModule } from './sign-up/sign-up.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainPageRoutingModule,
    SignInPageModule,
    SignUpPageModule
  ],
  declarations: [MainPage]
})
export class MainPageModule {}
