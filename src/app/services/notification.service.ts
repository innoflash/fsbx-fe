import { Injectable } from '@angular/core';
import { NotificationType } from "../config/app.types";
import { BehaviorSubject, first, interval } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class NotificationService {
    private showNotificationSubject = new BehaviorSubject<boolean>(false);
    public showNotification$ = this.showNotificationSubject.asObservable();
    public notificationType = NotificationType.SUCCESS;
    public message = '';

    public show(message: string, type: NotificationType): void {
        this.showNotificationSubject.next(true);
        this.message = message;
        this.notificationType = type;

        interval(2000).pipe(first()).subscribe(res => this.showNotificationSubject.next(false));
    }
}
