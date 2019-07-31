import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { MainNavigationPage } from './main-navigation.page';
import {MainNavigationPageRoutingModule} from "./main-navigation.router.module";



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainNavigationPageRoutingModule
  ],
  declarations: [MainNavigationPage]
})
export class MainNavigationPageModule {}
