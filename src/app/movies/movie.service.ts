import { Injectable } from '@angular/core';
import { IMovie } from './movie';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movieUrl = 'assets/movies/movies.json';

  constructor(private http: HttpClient) { }

  getMovies(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>(this.movieUrl).pipe(
      tap(data => console.log('data received.')),
      catchError(this.handleError)
    );
  }

  getMovie(id: number): Observable<IMovie | undefined> {
    return this.getMovies().pipe(
      map((movies: IMovie[]) => movies.find(p => p.movieId === id))
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `Error message: ${err.error.message}`;
    } else {
      errorMessage = `Error status is: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
