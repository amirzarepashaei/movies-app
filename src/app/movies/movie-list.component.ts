import { Component, OnInit } from '@angular/core';
import { MovieService} from './movie.service';
import { IMovie } from './movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  pageTitle = 'Library';
  imageWidth = 50;
  imageMargin = 2;
  showImage = true;
  errorMessage = '';

  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredMovies = this.listFilter ? this.performFilter(this.listFilter) : this.movies;
  }

  filteredMovies: IMovie[] = [];
  movies: IMovie[] = [];

  constructor(private movieService: MovieService) {}

  performFilter(filterBy: string): IMovie[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.movies.filter((movie: IMovie) =>
      movie.movieName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
  ngOnInit(): void {
    this.movieService.getMovies().subscribe(
      movies => {
        this.movies = movies;
        this.filteredMovies = this.movies;
      },
      error => this.errorMessage = <any> error
    );
  }
}
