import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarwarsListService {

  constructor(
    private http: HttpClient
  ) { }

  public GetJson(): Observable<any> {
    return this.http.get('./assets/starwarsList.json' );
  }
}
