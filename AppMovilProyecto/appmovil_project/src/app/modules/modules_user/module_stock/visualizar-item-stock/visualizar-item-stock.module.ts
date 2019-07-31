import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VisualizarItemStockPage } from './visualizar-item-stock.page';

const routes: Routes = [
  {
    path: '',
    component: VisualizarItemStockPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VisualizarItemStockPage]
})
export class VisualizarItemStockPageModule {}
