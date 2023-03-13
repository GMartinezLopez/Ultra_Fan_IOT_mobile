import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DasControlPageRoutingModule } from './das-control-routing.module';

import { DasControlPage } from './das-control.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DasControlPageRoutingModule
  ],
  declarations: [DasControlPage]
})
export class DasControlPageModule {}
