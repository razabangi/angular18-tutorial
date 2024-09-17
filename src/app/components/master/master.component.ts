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
  currency: string = "";
  hobbies: string[] = [];

  toggleHobby(hobby: string, event: any) {
    if (event.target.checked) {
      this.hobbies.push(hobby);
    } else {
      this.hobbies = this.hobbies.filter(h => h !== hobby);
    }
  }
}
