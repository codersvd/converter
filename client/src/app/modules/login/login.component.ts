import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
    email: FormControl = new FormControl(null, [
        Validators.email,
        Validators.required
    ]);
    password: FormControl = new FormControl(null, Validators.required);

    loginForm: FormGroup;

    constructor() {}

    ngOnInit() {
        this.loginForm = new FormGroup({
            email: this.email,
            password: this.password
        });
    }

    onSubmit() {
        console.log(this.loginForm);
    }

    getErrorEmail(email: FormControl) {
        return this.email.hasError('required')
            ? 'You must enter a value'
            : this.email.hasError('email')
            ? 'Not a valid email'
            : '';
    }

    getErrorPassword(password: FormControl) {
        return this.password.hasError('required')
            ? 'You must enter a value'
            : '';
    }
}
