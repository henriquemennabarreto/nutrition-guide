import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { AuthGuard } from '../shared/guards/auth.guard';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'autenticar',
        loadChildren: () => import('../autenticar/autenticar.module').then(m => m.AutenticarPageModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'perfil-usuario',
        loadChildren: () => import('../perfil-usuario/perfil-usuario.module').then(m => m.PerfilUsuarioPageModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'visualizar-resultado',
        loadChildren: () => import('../visualizar-resultado/visualizar-resultado.module').then(m => m.VisualizarResultadoPageModule),
        canActivate: [AuthGuard]
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
