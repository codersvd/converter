import { async, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { ApiService } from './api.service';

describe('ApiService', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule]
        }).compileComponents();
    }));

    it('should be created', () => {
        const service: ApiService = TestBed.inject(ApiService);
        expect(service).toBeTruthy();
    });
});
