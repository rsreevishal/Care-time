import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParentPageRoutingModule } from './parent-routing.module';

import { ParentPage } from './parent.page';

import { ChildrenPageModule } from './children/children.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParentPageRoutingModule,
    ChildrenPageModule
  ],
  declarations: [ParentPage]
})
export class ParentPageModule {}
