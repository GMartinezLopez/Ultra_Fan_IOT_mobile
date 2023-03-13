import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ContrrolIotComponent } from './pages/contrrol-iot/contrrol-iot.component';

const routes: Routes = [

  {
    path: '', component: ContrrolIotComponent
  },
  {
    path: 'graficas',
    loadChildren: () => import('./graficas/graficas.module').then( m => m.GraficasPageModule)
  },
  {
    path: 'das-control',
    loadChildren: () => import('./das-control/das-control.module').then( m => m.DasControlPageModule)
  },
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
