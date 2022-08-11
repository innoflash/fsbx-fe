import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LoginService } from "../services/login.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: []
})
export class LoginComponent {
    public readonly loginForm: FormGroup;

    public constructor(
        private readonly fb: FormBuilder,
        private readonly loginService: LoginService,
        private readonly router: Router
    ) {
        this.loginForm = this.fb.group({
            email: [null, [Validators.required, Validators.email]],
            password: [null, [Validators.required]]
        });
    }

    public login(): void {
        this.loginService.login(this.loginForm.value).subscribe(res => this.router.navigate(['/panics']));
    }
}
