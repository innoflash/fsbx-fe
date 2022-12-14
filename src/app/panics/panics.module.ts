import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanicsRoutingModule } from './panics-routing.module';
import { HomeComponent } from './home/home.component';
import { SendComponent } from './send/send.component';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
    declarations: [
        HomeComponent,
        SendComponent
    ],
    imports: [
        CommonModule,
        PanicsRoutingModule,
        HttpClientModule,
        ReactiveFormsModule
    ]
})
export class PanicsModule {
}
