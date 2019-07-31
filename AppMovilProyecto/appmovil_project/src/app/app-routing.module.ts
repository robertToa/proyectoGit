import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AutenticacionGuardService} from "./guards/autenticacion-guard.service";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'welcome', loadChildren: () => import('./modules/home/home.module').then(m => m.HomePageModule)},
  { path: 'main-navigation', canActivate: [
         AutenticacionGuardService
      ],loadChildren: './modules/modules_user/main-navigation/main-navigation.module#MainNavigationPageModule' },
  { path: 'login', loadChildren: './modules/modules_login/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './modules/modules_login/register/register.module#RegisterPageModule' },
  { path: 'ferget-password', loadChildren: './modules/modules_login/ferget-password/ferget-password.module#FergetPasswordPageModule' },
  { path: 'lista-stock', loadChildren: './modules/modules_user/module_stock/lista-stock/lista-stock.module#ListaStockPageModule' },
  { path: 'visualizar-item-stock', loadChildren: './modules/modules_user/module_stock/visualizar-item-stock/visualizar-item-stock.module#VisualizarItemStockPageModule' },
  { path: 'lista-compras', loadChildren: './modules/modules_user/module_compra/lista-compras/lista-compras.module#ListaComprasPageModule' },
  { path: 'visualizar-item-compra', loadChildren: './modules/modules_user/module_compra/visualizar-item-compra/visualizar-item-compra.module#VisualizarItemCompraPageModule' },
  { path: 'crear-item-compra', loadChildren: './modules/modules_user/module_compra/crear-item-compra/crear-item-compra.module#CrearItemCompraPageModule' },
  { path: 'crear-item-venta', loadChildren: './modules/modules_user/module_venta/crear-item-venta/crear-item-venta.module#CrearItemVentaPageModule' },
  { path: 'lista-ventas', loadChildren: './modules/modules_user/module_venta/lista-ventas/lista-ventas.module#ListaVentasPageModule' },
  { path: 'visualizar-item-venta', loadChildren: './modules/modules_user/module_venta/visualizar-item-venta/visualizar-item-venta.module#VisualizarItemVentaPageModule' },
  { path: 'visualizar-ingre-egre', loadChildren: './modules/modules_user/module_ingresos_egresos/visualizar-ingre-egre/visualizar-ingre-egre.module#VisualizarIngreEgrePageModule' },
  { path: 'visualizar-perfil', loadChildren: './modules/modules_user/module_perfil/visualizar-perfil/visualizar-perfil.module#VisualizarPerfilPageModule' },
  { path: 'create-jean', loadChildren: './modules/modules_user/module_perfil/create-jean/create-jean.module#CreateJeanPageModule' },
  { path: 'create-tipo', loadChildren: './modules/modules_user/module_perfil/create-tipo/create-tipo.module#CreateTipoPageModule' },
  { path: 'create-talla', loadChildren: './modules/modules_user/module_perfil/create-talla/create-talla.module#CreateTallaPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
