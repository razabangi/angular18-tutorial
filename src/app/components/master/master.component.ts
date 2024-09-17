import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-master',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './master.component.html',
  styleUrl: './master.component.css'
})
export class MasterComponent {
  name: string = "Muhammad Raza Bangi";
  type: string = "checkbox";
}
