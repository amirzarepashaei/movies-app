import { TestBed, inject } from '@angular/core/testing';

import { MovieSpecGuard } from './movie-spec.guard';

describe('MovieSpecGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieSpecGuard]
    });
  });

  it('should ...', inject([MovieSpecGuard], (guard: MovieSpecGuard) => {
    expect(guard).toBeTruthy();
  }));
});
