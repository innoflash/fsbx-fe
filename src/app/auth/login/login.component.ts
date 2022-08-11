import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: []
})
export class LoginComponent {
    public readonly loginForm: FormGroup;

    public constructor(private readonly fb: FormBuilder) {
        this.loginForm = this.fb.group({
            email: [null, [Validators.required, Validators.email]],
            password: [null, [Validators.required]]
        });
    }

    public login(): void {

    }
}
