import { Component, OnInit } from '@angular/core';
import { MovieService } from './movie.service';
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
  nameFilter = '';
  textFilter = '';
  get movieNameFilter(): string {
    return this.nameFilter;
  }
  set movieNameFilter(value: string) {
    this.nameFilter = value;
    this.filteredMovies = this.movieNameFilter ? this.performFilter(this.movieNameFilter) : this.movies;
  }
  get genreFilter(): string {
    return this.textFilter;
  }
  set genreFilter(value: string) {
    this.textFilter = value;
    this.filteredMovies = this.genreFilter ? this.performGenreFilter(this.genreFilter) : this.movies;
  }
  filteredMovies: IMovie[] = [];
  movies: IMovie[] = [];

  constructor(private movieService: MovieService) {
  }

  performFilter(filterBy: string): IMovie[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.movies.filter((movie: IMovie) =>
      movie.movieName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
  performGenreFilter(filterBy: string): IMovie[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.movies.filter((movie: IMovie) =>
      movie.genres.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
  ngOnInit(): void {
    this.movieService.getMovies().subscribe(
      movies => {
        this.movies = movies;
        this.filteredMovies = this.movies;
      },
      error => this.errorMessage = error as any
    );
  }
}
