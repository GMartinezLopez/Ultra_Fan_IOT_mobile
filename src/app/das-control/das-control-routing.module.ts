import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DasControlPage } from './das-control.page';

const routes: Routes = [
  {
    path: '',
    component: DasControlPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DasControlPageRoutingModule {}
