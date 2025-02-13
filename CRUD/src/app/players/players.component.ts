import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../players.service';

@Component({
  selector: 'app-players',
  standalone: false,  // Setting standalone: false
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players: any = []; 
  newPlayer = { id: 0, name: '' };

  constructor(private ps: PlayersService) {}

  ngOnInit() {
    this.showPlayers(); 
  }

  showPlayers() {
    this.ps.getPlayers().subscribe(
      (data) => {
        this.players = data;
      },
      (error) => {
        console.error('Error fetching players:', error);
      }
    );
  }

  savePlayer() {
    // Correctly call the addPlayer method
    this.ps.addPlayer(this.newPlayer).subscribe(
      (response) => {
        this.players.push(response);  // Add the new player to the list
        this.newPlayer = { id: 0, name: '' };  // Reset form
      },
      (error) => {
        console.error('Error saving player:', error);
      }
    );
  }
}
