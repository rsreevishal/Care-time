import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainPageRoutingModule } from './main-routing.module';

import { MainPage } from './main.page';
import { SignInPage } from './sign-in/sign-in.page';
import { SignInPageModule } from './sign-in/sign-in.module';
import { SignInPageRoutingModule } from './sign-in/sign-in-routing.module';
import { SignUpPageModule } from './sign-up/sign-up.module';
import { GalleryPageModule } from './gallery/gallery.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainPageRoutingModule,
    SignInPageModule,
    SignUpPageModule,
    GalleryPageModule
  ],
  declarations: [MainPage]
})
export class MainPageModule {}
