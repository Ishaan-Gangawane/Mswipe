import { Component , Input, OnChanges, SimpleChanges } from '@angular/core';
import { GameServiceService } from 'src/app/game-service.service';
import { HttpClient } from '@angular/common/http';

export interface GameFilters {
  name: string;
  score: string;
  orderBy: string;
}

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent {



  constructor(private gameService: GameServiceService ,private http: HttpClient) {}

 

}
