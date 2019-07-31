import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VisualizarItemCompraPage } from './visualizar-item-compra.page';

const routes: Routes = [
  {
    path: '',
    component: VisualizarItemCompraPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VisualizarItemCompraPage]
})
export class VisualizarItemCompraPageModule {}
