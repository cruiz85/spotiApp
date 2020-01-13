import {Component, OnInit} from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: []
})
export class ArtistaComponent implements OnInit {
  artista: any;
  loading: any;
  tracks: any;

  constructor(private  activatedRouter: ActivatedRoute, private spotifyService: SpotifyService) {
    activatedRouter.params.subscribe(params => {
      this.getTracksByArtist(params.id);
      this.getArtistaById(params.id);
    });

  }

  getArtistaById(id: string) {
    this.loading = true;
    this.spotifyService.getArtistaById(id).subscribe(data => {
      this.artista = data;
      this.loading = false;
    });
  }

  getTracksByArtist(id: string) {
    this.spotifyService.getTopTracks(id).subscribe(data => {
      this.tracks = data;
      console.log(this.tracks);
    });
  }

  ngOnInit() {
  }

}
