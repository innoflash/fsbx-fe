import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanicsRoutingModule } from './panics-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    PanicsRoutingModule
  ]
})
export class PanicsModule { }
