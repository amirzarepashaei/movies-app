import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMovie} from './movie';
import { MovieService} from './movie.service';

@Component({
  selector: 'app-movie-spec',
  templateUrl: './movie-spec.component.html',
  styleUrls: ['./movie-spec.component.scss']
})
export class MovieSpecComponent implements OnInit {

  pageTitle = 'Movie Specification';
  errorMessage = '';
  movie: IMovie | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private movieService: MovieService) {
  }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getMovie(id);
    }
  }

  getMovie(id: number) {
    this.movieService.getMovie(id).subscribe(
      movie => this.movie = movie,
      error => this.errorMessage = <any> error);
  }

  onBack(): void {
    this.router.navigate(['/movies']);
  }

}
