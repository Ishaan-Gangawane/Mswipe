import { Component } from '@angular/core';

@Component({
  selector: 'app-video-games',
  templateUrl: './video-games.component.html',
  styleUrls: ['./video-games.component.scss']
})
export class VideoGamesComponent {
  filters: any = {};

  onFiltersChanged(filters: any) {
    this.filters = filters;
  }

}
