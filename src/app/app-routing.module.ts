import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'video-games',
    loadChildren: () =>
      import('./video-games/video-games.module').then((m) => m.VideoGamesModule),
  },
  // {
  //   path: 'contact',
  //   component: ContactComponent, // You must create this component
  // },
  {
    path: '',
    redirectTo: 'video-games',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'video-games',
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
