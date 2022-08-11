import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { SendComponent } from "./send/send.component";

const routes: Routes = [{
    path: '',
    children: [
        {
            path: '',
            component: HomeComponent
        }, {
            path: 'send',
            component: SendComponent
        }
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PanicsRoutingModule {
}
