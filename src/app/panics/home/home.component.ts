import { Component, OnInit } from '@angular/core';
import { PanicsService } from "../services/panics.service";
import { finalize } from "rxjs";
import { PanicModel } from "../config/panics.types";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public isLoading = true;
    public panics: PanicModel[] = [];

    public constructor(private readonly panicsService: PanicsService) {
    }

    public ngOnInit(): void {
        this.panicsService.fetch().pipe(
            finalize(() => this.isLoading = false)
        ).subscribe(res => this.panics = res)
    }

}
