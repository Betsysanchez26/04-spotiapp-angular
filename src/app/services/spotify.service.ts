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
      'Authorization': 'Bearer BQCu0LL_g_Q7D928d_FFfE451n383olqSKfKFG6D_NlsrN2Yqun3zO8hVIEdKZFXu_pfLmT7pumEDqMS0LU'
    });
    return  this.http.get(url, { headers});
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases')
     .pipe( map(data =>  data['albums'].items));
  }

  getArtistas( termino: String) {
    return this.getQuery(`search?query=${termino}&type=artist&market=MX&offset=0&limit=15`)
    .pipe( map(data => data['artists'].items));
  }

  getArtista( id: String) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks( id: String) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
    .pipe( map(data => data['tracks']));
  }
}
