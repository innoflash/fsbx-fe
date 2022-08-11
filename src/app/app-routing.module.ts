import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestGuard } from "./guards/guest.guard";
import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
    {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full'
    }, {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
        canLoad: [GuestGuard]
    }, {
        path: 'panics',
        loadChildren: () => import('./panics/panics.module').then(m => m.PanicsModule),
        canLoad: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
