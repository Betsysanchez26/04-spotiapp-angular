import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent  {

  artistas: any[] = [];
  constructor( private spotify: SpotifyService) { }

  buscar(termino) {
    this.spotify.getArtist(termino).subscribe(
      (data: any) => {

        this.artistas = data;
      }
    );
  }

}
