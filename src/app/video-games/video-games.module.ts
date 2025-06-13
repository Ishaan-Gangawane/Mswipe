import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VideoGamesComponent } from './video-games.component';
import { FilterSidebarComponent } from './filter-sidebar/filter-sidebar.component';
import { GameListComponent } from './game-list/game-list.component';
import { GameCardComponent } from './game-card/game-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {
    path: '',
    component: VideoGamesComponent
  }
];

@NgModule({
  declarations: [
    VideoGamesComponent,
    FilterSidebarComponent,
    GameListComponent,
    GameCardComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class VideoGamesModule {}
