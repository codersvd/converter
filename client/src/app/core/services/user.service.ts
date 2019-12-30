import { Injectable } from '@angular/core';

import { User } from '@app/core/interfaces/user';
import { ApiService } from '@app/core/http/api.service';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private api: ApiService) {}

    register(user: User) {
        //return this.http.post(`${config.apiUrl}/users/register`, user);
    }
}
