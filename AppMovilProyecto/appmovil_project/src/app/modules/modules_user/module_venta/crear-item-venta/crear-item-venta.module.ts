import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CrearItemVentaPage } from './crear-item-venta.page';

const routes: Routes = [
  {
    path: '',
    component: CrearItemVentaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CrearItemVentaPage]
})
export class CrearItemVentaPageModule {}
