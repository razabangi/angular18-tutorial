import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MoviesComponent } from "../movies/movies.component";
import { CartoonsComponent } from "../cartoons/cartoons.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-master',
  standalone: true,
  imports: [FormsModule, MoviesComponent, CartoonsComponent, CommonModule],
  templateUrl: './master.component.html',
  styleUrl: './master.component.css'
})
export class MasterComponent {
  currentTab: string = "movies";

  selectTab(value: string) {
    this.currentTab = value;
  }
}
