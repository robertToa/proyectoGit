import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VisualizarIngreEgrePage } from './visualizar-ingre-egre.page';

const routes: Routes = [
  {
    path: '',
    component: VisualizarIngreEgrePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VisualizarIngreEgrePage]
})
export class VisualizarIngreEgrePageModule {}
