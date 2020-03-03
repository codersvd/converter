import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ApiService } from '../../core/http/api.service';
import { AuthenticationService } from '@app/core/authentication/authentication.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit, OnDestroy {
    private subscription: Subscription;
    loading = false;
    submitted = false;
    returnUrl: string;

    email: FormControl = new FormControl(null, [Validators.email, Validators.required]);
    password: FormControl = new FormControl(null, Validators.required);

    loginForm: FormGroup;

    constructor(
        private api: ApiService,
        private auth: AuthenticationService,
        private router: Router,
        private route: ActivatedRoute,
        private _snackBar: MatSnackBar
    ) {
        if (this.auth.currentUserValue) {
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
        this.loginForm = new FormGroup({
            email: this.email,
            password: this.password
        });

        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    onSubmit() {
        this.submitted = true;

        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.subscription = this.api
            .get('login')
            .pipe(first())
            .subscribe(
                obj => {
                    console.log(obj);
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    console.log(error);
                    this._snackBar.open(error, null, {
                        duration: 5000,
                        horizontalPosition: 'center',
                        verticalPosition: 'top'
                    });
                    this.loading = false;
                }
            );
    }

    getErrorEmail(email: FormControl) {
        return this.email.hasError('required')
            ? 'You must enter a value'
            : this.email.hasError('email')
            ? 'Not a valid email'
            : '';
    }

    getErrorPassword(password: FormControl) {
        return this.password.hasError('required') ? 'You must enter a value' : '';
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
