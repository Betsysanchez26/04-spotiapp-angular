import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable(//{
 // providenIn: 'root'}
)
export class SpotifyService {

  constructor( private http: HttpClient) { }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDm45GHUUNvj3R8295iUCwkW0yhoCHPT5INDdBPhuPvKCkouMOHVE2GrA1D7Fv-19X6X_jwcLxhmNbtmRk'
    });
    return  this.http.get(url, { headers});
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases')
     .pipe( map(data =>  data['albums'].items));
  }

  getArtist( termino: String) {
    return this.getQuery(`search?query=${termino}&type=artist&market=MX&offset=0&limit=15`)
    .pipe( map(data => data['artists'].items));
  }
}
