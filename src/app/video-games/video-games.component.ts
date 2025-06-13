import { Component } from '@angular/core';

@Component({
  selector: 'app-video-games',
  templateUrl: './video-games.component.html',
  styleUrls: ['./video-games.component.scss']
})
export class VideoGamesComponent {
  filters: any = {};

  onFiltersApplied(filters: any): void {
    console.log('Filters received in parent:', filters); // ✅ Debug
    this.filters = { ...filters };
  }

  onFiltersCleared(): void {
    this.filters = {};
  }
  

}
