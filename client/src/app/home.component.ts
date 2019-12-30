import { Component } from '@angular/core';
import { User } from '@app/core/interfaces/user';
import { AuthenticationService } from '@app/core/authentication/authentication.service';
import { UserService } from '@app/core/services/user.service';

@Component({
    selector: 'app-home',
    template: `
        <h1>Hi {{ currentUser.firstName }}!</h1>
        <p>You're logged in with Angular 8!!</p>
        <app-places></app-places>
    `
})
export class HomeComponent {
    currentUser: User;
    users = [];

    constructor(private auth: AuthenticationService, private userService: UserService) {
        this.currentUser = this.auth.currentUserValue;
    }
}
