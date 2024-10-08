import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsersFormComponent } from './users-form/users-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UsersFormComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'game-of-drones';
}
