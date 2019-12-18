import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
    selector: 'app-error-pages',
    templateUrl: './error-pages.component.html',
    styleUrls: ['./error-pages.component.less']
})
export class ErrorPagesComponent implements OnInit {
    errorMessage: string;

    constructor(private router: ActivatedRoute) {}

    ngOnInit() {
        this.router.data.subscribe((data: Data) => {
            this.errorMessage = data['message'];
        });
    }
}
