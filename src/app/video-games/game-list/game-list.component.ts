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
  @Input() filters: any = {};
  games: any[] = [];

  constructor(private gameService: GameServiceService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['filters']) {
      console.log('Filters changed in game list:', this.filters); // ✅ Debug
      this.fetchGames();
    }
  }

  fetchGames(): void {
    const params: any = {
      'pagination[page]': 1,
      'pagination[pageSize]': 10
    };

    if (this.filters?.name) {
      params['filters[name][$containsi]'] = this.filters.name;
    }

    if (this.filters?.score) {
      params['filters[rating][$gte]'] = this.filters.score;
    }

    if (this.filters?.orderBy) {
      params['sort'] = `${this.filters.orderBy}:asc`;
    }

    this.gameService.getGames(params).subscribe((res) => {
      console.log('API response:', res); // ✅ Debug
      this.games = res.data;
    });
  }

 

}
