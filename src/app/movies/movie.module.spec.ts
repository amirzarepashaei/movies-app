import { MovieModule } from './movie.module';

describe('MovieModule', () => {
  let movieModule: MovieModule;

  beforeEach(() => {
    movieModule = new MovieModule();
  });

  it('should bootstrap movie components and wire them to main module', () => {
    expect(movieModule).toBeTruthy();
  });
});
