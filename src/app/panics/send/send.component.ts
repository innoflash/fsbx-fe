import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { PanicsService } from "../services/panics.service";
import { Router } from "@angular/router";
import { NotificationService } from "../../services/notification.service";
import { NotificationType } from "../../config/app.types";

@Component({
    selector: 'app-send',
    templateUrl: './send.component.html',
    styles: []
})
export class SendComponent implements OnDestroy {
    public readonly panicForm: FormGroup;
    private subscription?: Subscription;

    public constructor(
        private readonly fb: FormBuilder,
        private readonly panicsService: PanicsService,
        private readonly router: Router,
        private readonly notificationService: NotificationService
    ) {
        this.panicForm = this.fb.group({
            latitude: [null, [Validators.required]],
            longitude: [null, [Validators.required]],
            panic_type: [],
            details: [],
        });
    }

    public sendPanic(): void {
        this.subscription = this.panicsService.send(this.panicForm.value)
            .subscribe(res => {
                this.notificationService.show(res.message, NotificationType.SUCCESS);
                this.router.navigate(['/panics']);
            })
    }

    public ngOnDestroy(): void {
        this.subscription?.unsubscribe();
    }
}
