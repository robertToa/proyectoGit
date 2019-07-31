import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainNavigationPage } from './main-navigation.page';

const routes: Routes = [
    {
        path: '',
        component: MainNavigationPage,
        children: [
            {
                path: 'tab1',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../module_stock/lista-stock/lista-stock.module').then(m => m.ListaStockPageModule)
                    }
                ]
            },
            {
                path: 'tab2',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../module_venta/lista-ventas/lista-ventas.module').then(m => m.ListaVentasPageModule)
                    }
                ]
            },
            {
                path: 'tab3',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../module_compra/lista-compras/lista-compras.module').then(m => m.ListaComprasPageModule)
                    }
                ]
            },
            {
                path: 'tab4',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../module_ingresos_egresos/visualizar-ingre-egre/visualizar-ingre-egre.module').then(m => m.VisualizarIngreEgrePageModule)
                    }
                ]
            },
            {
                path: 'tab5',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../module_perfil/visualizar-perfil/visualizar-perfil.module').then(m => m.VisualizarPerfilPageModule)
                    }
                ]
            },
            {
                path: 'visualizar-stock',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../module_stock/visualizar-item-stock/visualizar-item-stock.module').then(m => m.VisualizarItemStockPageModule)
                    }
                ]
            },
            {
                path: 'crear-venta',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../module_venta/crear-item-venta/crear-item-venta.module').then(m => m.CrearItemVentaPageModule)
                    }
                ]
            },
            {
                path: 'crear-compra',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../module_compra/crear-item-compra/crear-item-compra.module').then(m => m.CrearItemCompraPageModule)
                    }
                ]
            },
            {
                path: 'crear-tipo',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../module_perfil/create-tipo/create-tipo.module').then(m => m.CreateTipoPageModule)
                    }
                ]
            },
            {
                path: 'crear-talla',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../module_perfil/create-talla/create-talla.module').then(m => m.CreateTallaPageModule)
                    }
                ]
            },
            {
                path: 'crear-jean',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../module_perfil/create-jean/create-jean.module').then(m => m.CreateJeanPageModule)
                    }
                ]
            },
            {
                path: '',
                redirectTo: 'tab1',
                pathMatch: 'full'
            }

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainNavigationPageRoutingModule {}
