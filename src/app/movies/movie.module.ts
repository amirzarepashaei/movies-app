import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MovieListComponent } from './movie-list.component';
import { MovieSpecComponent } from './movie-spec.component';
import { MovieSpecGuard } from './movie-spec.guard';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'movies', component: MovieListComponent },
      {
        path: 'movies/:id',
        canActivate: [MovieSpecGuard],
        component: MovieSpecComponent
      },
    ]),
    FormsModule,
    CommonModule
  ],
  declarations: [
    MovieListComponent,
    MovieSpecComponent
  ]
})
export class MovieModule { }
