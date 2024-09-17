import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent implements OnInit {
  http = inject(HttpClient);

  movieList: any = [];

  ngOnInit(): void {
    this.http.get('https://api.sampleapis.com/movies/comedy').subscribe((d: any) => {
      this.movieList = d;
    });
  }
}
