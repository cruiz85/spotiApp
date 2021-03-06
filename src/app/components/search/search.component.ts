import {Component, OnInit} from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  artistas: any[];
  loading: boolean;

  constructor(private spotifyService: SpotifyService) {

  }

  ngOnInit() {
  }

  buscarArtista(value: string) {
    this.loading = true;
    this.spotifyService.getArtists(value).subscribe((data: any) => {
      this.artistas = data;
      this.loading = false;

    });


  }
}
