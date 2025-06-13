import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {

  private baseUrl = 'https://spa.api.logicloop.io/api/games';

  constructor(private http: HttpClient) {}

  getGames(filters: any, page: number = 1, pageSize: number = 10): Observable<any> {
    let params = new HttpParams()
      .set('pagination[page]', page.toString())
      .set('pagination[pageSize]', pageSize.toString());

    if (filters.name) {
      params = params.set('filters[name][$containsi]', filters.name);
    }

    if (filters.score) {
      params = params.set('filters[rating][$gte]', filters.score);
    }

    // You can implement sorting if needed
    if (filters.orderBy) {
      params = params.set('sort', `${filters.orderBy}:desc`);
    }

    return this.http.get(this.baseUrl, { params });
  }
}
