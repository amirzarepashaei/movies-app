import { TestBed, inject } from '@angular/core/testing';

import { MovieSpecGuard } from './movie-spec.guard';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('MovieSpecGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [MovieSpecGuard]
    });
  });

  it('should guard the route', inject([MovieSpecGuard], (guard: MovieSpecGuard) => {
    expect(guard).toBeTruthy();
  }));
});
