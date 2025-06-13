import { Component, OnInit } from '@angular/core';
import { GameServiceService } from 'src/app/game-service.service';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent  implements OnInit{
  games: any[] = [];
  expandedCardIds: Set<number> = new Set();
  filters = { name: '', score: '', orderBy: '' };


  constructor(private gameService: GameServiceService) {}

  ngOnInit(): void {
    this.fetchGames();
    // this.gameService.getGames().subscribe((res: { data: any[]; }) => {
    //   console.log(res);
    //   this.games = res.data; // res.data is an array of 25 games
    // });
  }

  fetchGames(): void {
    this.gameService.getGames(this.filters, 1, 10).subscribe((res) => {
      this.games = res.data;
    });
  }

  formatDate(ms: number | string): string {
    const date = new Date(Number(ms));
    return date.toLocaleDateString(); 
  }

  getRatingDigit(rating: string | number): string {
    return rating.toString().charAt(0);
  }
  formatCreatedAt(dateStr: string): string {
    const date = new Date(dateStr);
    return `${date.getDate().toString().padStart(2, '0')}/${
      (date.getMonth() + 1).toString().padStart(2, '0')
    }/${date.getFullYear()} ${date.getHours().toString().padStart(2, '0')}:${date
      .getMinutes()
      .toString()
      .padStart(2, '0')}`;
  }

  

  
  

}
