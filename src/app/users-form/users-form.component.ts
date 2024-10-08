import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styleUrls: ['./users-form.component.css']
})
export class UsersFormComponent {
  player1Valid = true;
  player2Valid = true;

  startGame() {
    const player1Input = (document.getElementById('player1') as HTMLInputElement);
    const player2Input = (document.getElementById('player2') as HTMLInputElement);

    this.player1Valid = player1Input.value.trim() !== '';
    this.player2Valid = player2Input.value.trim() !== '';

    if (this.player1Valid && this.player2Valid) {
      console.log(`Juego comenzado entre ${player1Input.value} y ${player2Input.value}`);
    }
  }
}
