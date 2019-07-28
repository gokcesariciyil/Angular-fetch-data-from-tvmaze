import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TvShowsServices {
  private readonly apiRoot = 'http://api.tvmaze.com';
  constructor(private http: HttpClient) {}

  getShow(id: number): Observable<string> {
    const url = `${this.apiRoot}/shows/${id}`;
    return this.http.get<string>(url);
  }

  getAllShows() {
    return this.http.get(this.apiRoot + '/search/shows?q=batman');
  }
}
