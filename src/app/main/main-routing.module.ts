import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';
import { AuthGuardService } from '../services/auth-guard.service';


const routes: Routes = [
  {
    path: '',
    component: MainPage,
  },
  {
    path: 'components',
    loadChildren: './components/components-routing.module#ComponentsRoutingModule',
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {
}
