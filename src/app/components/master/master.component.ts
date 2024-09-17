import { Component } from '@angular/core';

@Component({
  selector: 'app-master',
  standalone: true,
  imports: [],
  templateUrl: './master.component.html',
  styleUrl: './master.component.css'
})
export class MasterComponent {
  name: string = "Muhammad Raza Bangi";
  type: string = "checkbox";
}
