import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '@app/core/interfaces/user';
import { AuthenticationService } from '@app/core/authentication/authentication.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent {
    currentUser: User;

    constructor(private router: Router, private auth: AuthenticationService) {
        this.auth.currentUser.subscribe(x => (this.currentUser = x));
    }

    logout() {
        this.auth.logout();
        this.router.navigate(['/login']);
    }
}
