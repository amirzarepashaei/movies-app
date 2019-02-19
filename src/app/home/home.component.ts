import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public toneHead = 'Welcome to';
  public tone = 'Movies collection';
  public toneFoot = 'Browse through the library to find your favorite movie.';
}
