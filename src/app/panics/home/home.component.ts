import { Component, OnDestroy, OnInit } from '@angular/core';
import { PanicsService } from "../services/panics.service";
import { finalize, Subscription } from "rxjs";
import { PanicModel } from "../config/panics.types";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
    public isLoading = true;
    public panics: PanicModel[] = [];
    private subscription?: Subscription;

    public constructor(private readonly panicsService: PanicsService) {
    }

    public ngOnInit(): void {
        this.subscription = this.panicsService.fetch().pipe(
            finalize(() => this.isLoading = false)
        ).subscribe(res => this.panics = res)
    }

    public ngOnDestroy(): void {
        this.subscription?.unsubscribe();
    }
}
