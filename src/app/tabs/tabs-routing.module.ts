import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'autenticar',
        loadChildren: () => import('../autenticar/autenticar.module').then(m => m.AutenticarPageModule)
      },
      {
        path: 'perfil-usuario',
        loadChildren: () => import('../perfil-usuario/perfil-usuario.module').then(m => m.PerfilUsuarioPageModule)
      },
      {
        path: 'visualizar-resultado',
        loadChildren: () => import('../visualizar-resultado/visualizar-resultado.module').then(m => m.VisualizarResultadoPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/autenticar',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/autenticar',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
