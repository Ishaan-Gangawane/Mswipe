import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router) {}

  isActive(route: string): boolean {
    return this.router.url === route;
  }
  get activeRouteLabel(): string {
    const path = this.router.url;
    if (path.includes('video-game')) return 'VIDEO GAMES';
    if (path.includes('contact')) return 'CONTACT';
    return '';
  }
}
