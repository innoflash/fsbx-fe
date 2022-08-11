import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanicsRoutingModule } from './panics-routing.module';
import { HomeComponent } from './home/home.component';
import { SendComponent } from './send/send.component';


@NgModule({
  declarations: [
    HomeComponent,
    SendComponent
  ],
  imports: [
    CommonModule,
    PanicsRoutingModule
  ]
})
export class PanicsModule { }
