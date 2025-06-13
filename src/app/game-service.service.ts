import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {

  private baseUrl = 'https://spa.api.logicloop.io/api/games';

  constructor(private http: HttpClient) {}

  getGames(params: any): Observable<any> {
    return this.http.get('https://spa.api.logicloop.io/api/games', { params });
    console.log(params ,"-------params")
  }
  
}
