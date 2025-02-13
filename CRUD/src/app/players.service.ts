import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // ✅ Ensures it's available app-wide
})
export class PlayersService {
  private apiUrl = 'http://localhost:9090/player/save'; // API URL to save player

  constructor(private http: HttpClient) {}

  getPlayers(): Observable<any> {
    return this.http.get('http://localhost:9090/players');
  }

  addPlayer(player: any): Observable<any> {
    return this.http.post(this.apiUrl, player);
  }
}
