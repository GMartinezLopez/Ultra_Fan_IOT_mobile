import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GraficasPage } from './graficas.page';

const routes: Routes = [
  {
    path: '',
    component: GraficasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GraficasPageRoutingModule {}
